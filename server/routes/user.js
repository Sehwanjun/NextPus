const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models'); // db.user의 구조분해할당
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const local = require('../passport/local');
const db = require('../models');
const user = require('../models/user');
const router = express.Router();

// 사용자 불러오기
// 사용자 존재시 user정보 보내고 없으면 보내지 않음
router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        // attributes: ['id', 'nickname', 'email'], --> 이속성들만 받음
        attribute: {
          exclude: ['password'] // password속성 받지 않음(보안문제때문에)
        },
        // 다른테이블 정보 합치기
        include: [{  // hasMany라 model:Post가 복수형이 되어 me.Posts가 됨
          model: Post,
          attribute: ['id'], // 어차피 length(follower수 등)만 가져올것이라 id만 가져오게끔(데이터효율을 위한)
        }, {
          model: User,
          as: 'Followings',
          attribute: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attribute: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// passport/local에서 done: callback역할, local, 매개변수 ex. err(서버에러)/user/info를 넘겨받음
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      // 서버에러는 next(err);로 보내야하지만(아래 참조) 매개변수로 받지 않았음(사용방법 차이때문에)
      // 방법: 미들웨어의 확장 - 위의 req, res, next부분과 아래 같은부문을 붙인 다음에 넣음(passport.authen-- ~)
      return next(err);
    }
    // 클라이언트 에러 발생시 passport/local에서 작성한 명령을 client로 응답을 보내줌
    // 401 : http 상태코드(한번 조회!)의 '비인증'
    if (info) {
      return res.status(401).send(info.reason);
    }
    // 에러 없을시 로그인(loginerr: 서버로그인 이후 passport로그인(2단계) 관련)
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr)
        return next(loginErr)
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // attributes: ['id', 'nickname', 'email'], --> 이속성들만 받음
        attribute: {
          exclude: ['password'] // password속성 받지 않음(보안문제때문에)
        },
        // 다른테이블 정보 합치기
        include: [{  // hasMany라 model:Post가 복수형이 되어 me.Posts가 됨
          model: Post,
          attribute: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attribute: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attribute: ['id'],
        }]
      })
      // res.setHeader('Cookie','cxlhy...') 포함되어 들어감
      // cookie: 서버쪽에선 (ex.password) 통째로 들고있고, front에선 복잡한 문자열로 변형되어 들어감
      // session: 서버쪽에 통째로 들고있는 것
      return res.status(200).json(fullUserWithoutPassword); //login 정보 front로 넘겨줌
    })
  })(req, res, next)
}) // post /user /login

// 회원가입
// 라우터명과 합쳐져서 Post /user/ (saga에서의 user와 일치하게끔-localhost:3054/user)
router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    // 이메일 중복확인을 위한 작업 
    // front에서 보낸 메일주소(req.body.email)와 같은 data(email) 확인
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    })
    if (exUser) {
      // return 필수(없을시 아래명령 계속수행)
      // status: 헤더 일부로 200: 성공, 300: 리다이렉트, 400: client 에러(보내는쪽에서 잘못보냄), 500: server 에러
      return res.status(403).send('이미 사용중인 아이디입니다.')
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    // 테이블 내에 데이터 삽입
    // async, await: res.json 선실행 방지를 위함(비동기) - 비동기 판별유무: 공식문서
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    })
    res.status(201).send('ok'); //200: 성공, 201: 데이터 성공적인 전송
  } catch (error) {
    console.error(error);
    next(error); // next를 통해 error전송(status 500)
  }
})

// @ 로그아웃
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy(); // session에 저장된 cookie와 id 없애기
  res.send('ok');
  res.redirect('/'); // 추가
})

// 닉네임 수정
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      nickname: req.body.nickname, // front에서 받은 닉네임으로 수정
    }, {
      where: { id: req.user.id } // 내 아이디를 수정
    });
    res.status(200).json({ nickname: req.body.nickname })
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 팔로우  PATCH /user/1/follow
router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } })
    if (!user) {
      res.status(403).send('팔로우하려는 대상이 없습니다.')
    }
    await user.addFollowers(req.user.id)
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) }) // 상대방 아이디
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 언팔로우  DELETE /user/1/follow
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } })
    if (!user) {
      res.status(403).send('언팔로우하려는 대상이 없습니다.')
    }
    await user.removeFollowers(req.user.id)
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) }) // 상대방 아이디
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 팔로워 리스트 정보 불러오기 GET /user /followers
router.get('/followers', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } })
    if (!user) {
      res.status(403).send('내 정보를 찾을 수 없습니다.')
    }
    const followers = await user.getFollowers();
    res.status(200).json(followers)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 팔로잉 리스트 정보 불러오기 GET /user /followings
router.get('/followings', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } })
    if (!user) {
      res.status(403).send('내 정보를 찾을 수 없습니다.')
    }
    const followings = await user.getFollowings();
    res.status(200).json(followings)
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// 팔로워 제거  DELETE /user/follower/2
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {
  try {
    // 내가 상대방을 차단 = 상대방이 나를 차단 동일함
    const user = await User.findOne({ where: { id: req.params.userId } })
    if (!user) {
      res.status(403).send('차단하려는 대상자가 없습니다.')
    }
    await user.removeFollowings(req.user.id)
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) }) // 상대방 아이디
  } catch (error) {
    console.error(error);
    next(error);
  }
})


module.exports = router;