const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs') // file system(이미지 저장폴더관리)

const { Post, Image, Comment, User, Hashtag } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router();

// images 업로드관련 - uploads폴더 확인 및 생성
try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

// 이미지 업로드용 라우터(multer 지정)
const upload = multer({
  // 일단 컴퓨터 하드디스크에 저장하도록(추후수정)
  storage: multer.diskStorage({
    destination(req, file, done) {
      // 저장되는 폴더명: uploads
      done(null, 'uploads');
    },
    filename(req, file, done) {  // ex. nextpus.png
      // 파일명이 같은 내용물이 저장될 경우 이전 파일에 덮어쓰게 되어있음
      // 따라서 업로드시간을 파일명에 붙여주어 중복을 제거하도록 함
      const ext = path.extname(file.originalname);  // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext);  // 파일명 추출(nextpus)
      done(null, basename + '_' + new Date().getTime() + ext);  // nextpus_291728302...png
    },
  }),
  limits: { fileSize: 24 * 1024 * 1024 },  // 24MB로 크기제한
});
// ** 이미지, 영상파일: 서버 거치지 않고 front-->cloud로 직행하는 것이 최선

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // 주소: Post /post
  try {
    // hashtag 관련
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    // 기본 post 관련
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    // hashtag 관련
    if (hashtags) {
      // Hashtag.create --> Hashtag.findOrCreate (해쉬태그 중복되는 값은 DB에 포함하지 않기 위해)
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      }))); // result 형태: [node, true], [react, true]] 따라서, result의 첫번째값만 넣기위해 map 이용
      await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) { // 이미지를 업로드하였으며,
      if (Array.isArray(req.body.image)) { // 업로드한 이미지가 여러개일 경우 image: [next.png, pus.png](배열)
        // 해당배열을 sequelize에 create함 -> next create promise
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image }))); // 파일'주소'를 동시에 db에 저장
        await post.addImages(images); // 게시글 post create에 추가
      } else { // 이미지가 한개일 경우 image: nextpus.png 배열X
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User, // 댓글 작성자
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User, // 좋아요 누른사람 (post.Likers 생성)
        as: 'Likers', // db에서 그대로 가져와야 구별가능
        attributes: ['id'],
      }]
    })
    // 다시 frontend로 전송
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 이미지 업로드용 라우터 
// upload.arry: 여러장 업로드 가능화(단일이미지일 경우: upload.single('image')) file input이 여러개 있을 경우: upload.field... / none: 텍스트 등
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
  console.log(req.files); // 업로드 어떻게 되었는지에 대한 정보
  res.json(req.files.map((v) => v.filename)); // 어디로 업로드 되었는지에 대한 파일명을 front로 전송
})

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => { // 주소: Post /post/1/retweet
  try {
    // 해당 post가 있는지 여부확인
    // include 추가한 이유: 아래의 몇몇 조건이 추가되어
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [{
        model: Post,
        as: 'Retweet',
      }],
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시물입니다.')
    }
    // 자기게시글 리트윗 or 자기게시글을 남이 리트윗한걸 내가 다시 리트윗하는 걸 방지
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send('자신의 글은 리트윗할 수 없습니다.')
    }
    // 남의 게시글 --> 리트윗 --> 내가 리트윗
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      }
    });
    if (exPost) {
      return res.status(403).send('이미 리트윗하였습니다.')
    }
    // 검사는 끝났다.
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet', // content값 null(비울)수 없어서
    });
    //내가 어떤 글을 리트윗했는지 확인하기 위한
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        },
          //  {
          //   model: User,
          //   as: 'Likers',
          //   attributes: ['id'],
          // }
        ],
      }]
    })
    // 다시 frontend로 전송
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})


router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // 주소: Post /post/1/comment
  try {
    // 해당 comment의 post가 있는지 여부확인
    const post = await Post.findOne({
      where: { id: req.params.postId },
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시물입니다.')
    }

    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10), // req.params: string(문자열)로 인식되기때문에 에러 --> parseInt로
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    })
    // 다시 frontend로 전송
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 게시글 like
router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {  // PATCH /post /1 /like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.addLikers(req.user.id); // db의 게시글 좋아하는 사람에 추가(add)
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
})
// 게시글 unlike
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {  // DELETE /post /1 /like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.removeLikers(req.user.id); // db의 게시글 좋아하는 사람에 제거(remove)
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 게시글 삭제
router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post /10
  try {
    await Post.destroy({ // destroy: 삭제
      where: {
        id: req.params.postId,
        UserId: req.user.id, // 다른이가 지울 수 있으니 보안상 추가
      },
    })
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) })
  } catch (error) {
    console.error(error);
    next(error);
  }
})


module.exports = router;