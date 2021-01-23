// const { sequelize } = require(".").default;

module.exports = (sequelize, DataTypes) => {
  // mySQL에 소문자 자동변경으로 users로 (sequelize와 mySQL간의 규칙)
  const Hashtag = sequelize.define('Hashtag', {
    // id: mySQL에서 자동으로 삽입되어 따로 정의할 필요 X
    name: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수값
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // utf8: 한글저장 관련, md4: 이모티콘 포함
  });
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' }) // 다대다 관계

  };
  return Hashtag;
}