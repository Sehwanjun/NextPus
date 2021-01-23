const passport = require('passport');
// 구조분할로 이름 Local-로 변경(추후 Snslogin시 ex kakaoStrategy 등과 구분 위함)
// sns 연결: passport-kakao, passport-twitter 등 검색해서 로그인용 앱 만든후 그대로 연결
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    // frontend에서 dispatch했던 email, password(saga에서 data.email, data.password) 
    // --> server로 가면 req.body.email --> router에서? email로 변경시킨 데이터임
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    // #0 서버에러 확인(done(null)첫번째 인자값)
    try {
      // #1 아이디(이메일) 존재여부 체크
      const user = await User.findOne({
        where: { email: email }
      });
      // #2 아이디(이메일)이 존재하지 않을 경우
      if (!user) {
        // 첫째자리(null): 서버에러, 둘째자리(false): 성공여부, 셋째자리: 클라이언트 에러
        return done(null, false, { reason: '존재하지 않는 이메일입니다.' })
      }
      // #3 아이디 존재, 비밀번호 일치
      const result = await bcrypt.compare(password, user.password)
      if (result) {
        // 성공했을 땐 사용자 정보 넘겨주기
        return done(null, user)
      }
      // #4 비밀번호 불일치
      return done(null, false, { reason: '비밀번호가 맞지 않습니다.' })
    } catch (e) {
      console.error(e);
      return done(error);
    }
  }));
}