// const { sequelize } = require(".").default;

module.exports = (sequelize, DataTypes) => {
  // mySQL에 소문자 자동변경으로 users로 (sequelize와 mySQL간의 규칙)
  const Post = sequelize.define('Post', {
    // id: mySQL에서 자동으로 삽입되어 따로 정의할 필요 X
    content: {
      type: DataTypes.TEXT, // 글자수 무제한(긴글)
      allowNull: false, // 필수값

    },
    // PostId ==> RetweetId
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // utf8: 한글저장 관련, md4: 이모티콘 포함
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User) // post.addUser, post.getUser, post.setUser(바꾸는 것) 생성(보통 get대신 include로)
    db.Post.hasMany(db.Comment) // post.addComments, post.getComments 생성
    db.Post.hasMany(db.Image) // post.addImages(hasmany: 복수(image's')), post.getImages
    // post.addRetweet 생성
    // 리트윗(1개의 원본게시물을 리트윗(복제)하여 1대다 관계) id/content/retweetId --> column 생성
    db.Post.belongsTo(db.Post, { as: 'Retweet' })
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }) // post.addHashtags 다대다 관계: 사이에 table 생성(이름: posthashtag)
    // post.addLikers(게시글에 좋아요 한 사람), post.removeLikers(좋아요한 사람 제거) 생성 / 사용자와 게시글의 좋아요 관계
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' })
  };
  return Post;
}