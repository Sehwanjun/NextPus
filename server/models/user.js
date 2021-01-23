// const { sequelize } = require(".").default;

module.exports = (sequelize, DataTypes) => {
  // mySQL에 소문자 자동변경으로 users로 (sequelize와 mySQL간의 규칙)
  const User = sequelize.define('User', {
    // id: mySQL에서 자동으로 삽입되어 따로 정의할 필요 X
    email: {
      type: DataTypes.STRING(50), // STRING, TEXT(긴글), BOOLEAN, INTEGER, FLOAT(실수), DATETIME
      allowNull: false, // 필수값
      unique: true, // 고유값(중복불가)
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수값

    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false, // 필수값

    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // utf8: 한글저장 관련
  });

  // 관계형 DB등록( 다른Table과의 관계가 필요하거나 user<=>user간의 관계시 이곳에 삽입)
  // hasMany, belongsTo: 1대다 관계
  // belongsToMany, belongsToMany: 다대다 관계
  // hasOne, belongsTo: 1대1관계(사용자 & 사용자개인정보)
  User.associate = (db) => {
    db.User.hasMany(db.Post) // 1:n 관계(한 포스트에 여러명 작성? 불가이므로)
    db.User.hasMany(db.Comment) // 1:n 관계(한 포스트에 여러명 작성? 불가이므로)
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }) //사용자와 게시글의 좋아요 관계(through: 중간테이블 이름수정)
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' }) // 팔로워팔로우/팔로워 관계(foreign: 같은 관계, '나'를 먼저 찾아야 팔로윙을 찾을 수 있으므로)
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' }) // 팔로워팔로우/팔로워 관계(foreign: 같은 관계면)
  };
  return User;
}