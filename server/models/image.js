// const { sequelize } = require(".").default;

module.exports = (sequelize, DataTypes) => {
  // mySQL에 소문자 자동변경으로 users로 (sequelize와 mySQL간의 규칙)
  const Image = sequelize.define('Image', {
    // id: mySQL에서 자동으로 삽입되어 따로 정의할 필요 X
    src: {
      type: DataTypes.STRING(200), // 글자수 무제한(긴글)
      allowNull: false, // 필수값
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // utf8: 한글저장 관련
  });
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post)

  };
  return Image;
}