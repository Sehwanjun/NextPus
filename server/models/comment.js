// const { sequelize } = require(".").default;

module.exports = (sequelize, DataTypes) => {
  // mySQL에 소문자 자동변경으로 users로 (sequelize와 mySQL간의 규칙)
  const Comment = sequelize.define('Comment', {
    // id: mySQL에서 자동으로 삽입되어 따로 정의할 필요 X
    content: {
      type: DataTypes.TEXT, // 글자수 무제한(긴글)
      allowNull: false, // 필수값
    },
    // belongsto로 인해서 user와 post의 id가 생성(누구의 것이냐 판별)
    // UserId: {},
    // PostId: {},
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // utf8: 한글저장 관련, md4: 이모티콘 포함
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User)
    db.Comment.belongsTo(db.Post)

  };
  return Comment;
}