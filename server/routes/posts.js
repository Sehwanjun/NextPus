const express = require('express');
// Op: 연산자(Operator)
const { Op } = require('sequelize');
const { Post, Image, User, Comment } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts 여러 게시글 불러들일 때 사용
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때(개시글 0개가 아닐때)
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) } // lastId보다 작은걸 선택!(ex. [Op.lt]:4 --> 4보다 작은것 찾아서 배열로)
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({  // findOne: 1개 가져오기, findAll: 여러개 가져오기
      where,
      limit: 10, // 게시글 가져오는 수: 10개
      // offset: 0, --> 1~10번 게시글까지 불러올 경우 offset:10 --> 11~20번 게시글 불러오기
      // where: {id: lastId} --> 20~11까지 불러온 후 11--> lastId가 되어 다음 진행 
      // 일반적으로 lastId, limit방식으로 구현 
      order: [
        ['createdAt', 'DESC'], // 최신글(거꾸로) 열거 - 2차원배열: 여러 기준으로 정렬하기 위함 ASC:오름차순 DESC: 내림차순
        [Comment, 'createdAt', 'DESC'], // 댓글 내림차순 정렬
      ],
      include: [{
        model: User, // 정보를 불러올 땐 항상 완성된 형태로 가져와야 함(작성자 정보)
        attributes: ['id', 'nickname'],  // 비밀번호 제외한 id, 닉네임만 가져오기
      }, {
        model: Image, // 게시글에 속한 이미지 불러오기
      }, {
        model: Comment, // 게시글에 속한 comment 불러오기
        include: [{  // comment의 작성자까지 불러와야 함
          model: User,
          attributes: ['id', 'nickname'],
          // order: ['createdAt', 'DESC'],
        }],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;