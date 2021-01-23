const passport = require('passport');
const local = require('./local')
const { User } = require('../models')
// routes/user의 login시 user정보가 들어감
module.exports = () => {
  passport.serializeUser((user, done) => {
    // 유저정보중 cookie와 묶어줄 x번만 저장
    // session에 다들고있기 무거우니 user.id만 따로 저장
    done(null, user.id)
  });

  // id를 통해서 user를 복구하는 함수
  // req.user내에 사용자 정보 넣어줌
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } })
      done(null, user)
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
}