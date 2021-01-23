const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');

const db = require('./models');
const passportConfig = require('./passport');
dotenv.config();
const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

const port = process.env.PORT || 3065; // 포트 번호 설정
app.use(morgan('dev')); // front --> backend 요청시 터미널에 송신상태 표현됨
app.use(cors({
  // origin: 'https://nextpus.com' 추후변경
  origin: 'http://localhost:3000',
  credentials: true, // 다른 주소간 cookie 전달
}));
// 업로드한 이미지 보이기 위한 작업 - 경로 맞추기 / static: 정적파일 제공 / join: 현 폴더명+uploads라는 이름을 합쳐
// '/': localhost:3065"/images"" --> Postform의 경로 참조
app.use('/images', express.static(path.join(__dirname, 'uploads')));
// 자리위치 고정, front(saga)에서 받은 data를 req.body로 넘겨줌 / axios형태
// 즉, front(saga)에서 받은 data를 해석하여 req.body.email 등으로 변경하도록 도움
app.use(express.json());
// 일반 form형태 data 처리
app.use(express.urlencoded({ extended: true }));

// 로그인시 front와 back이 같은 data를 갖고있어야 함
// 로그인시 db의 user정보를 다시 브라우저에 보내줄 때 비번: 보안위험요소 존재(암호화해서 cookie형태로 보냄)
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,  // 암호화
})); // passport 로그인시 활용
app.use(passport.initialize());
app.use(passport.session());
// 메인페이지(/)에서 가져오다(get)
app.get('/', (req, res) => {
  res.send('hello express');
})

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);

// 에러처리 middleware
// 기본적으로 에러처리 자동으로 해주지만, 직접 이렇게 만들수도 있음
// 예를들어, 에러페이지 따로 띄우고 싶거나 등등...
// app.use((err, req, res, next) => { })


app.listen(port, () => { console.log(`${port}번 port 서버 실행중!`) });