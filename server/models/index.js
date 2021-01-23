const Sequelize = require('sequelize');
const comment = require('./comment');
const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');

// 배포시 process.env.NODE_ENV를 prodution으로 변경 
// develop모드에서 config를 가져옴
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};
// sequelize로 node<-->mySQL 연결
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

db.Comment = require('./comment')(sequelize, Sequelize)
db.Hashtag = require('./hashtag')(sequelize, Sequelize)
db.Image = require('./image')(sequelize, Sequelize)
db.Post = require('./post')(sequelize, Sequelize)
db.User = require('./user')(sequelize, Sequelize)


// Object.keys(db).forEach(modelName => {
//   db[modelName].init(sequelize);
// });

// 관계형db 실행문(associate)
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
