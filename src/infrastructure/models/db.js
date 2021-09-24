const Sequelize = require('Sequelize');

const db = {};

const sequelize = new Sequelize({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || '3306',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

let models = [];

//Initialize models
models.forEach(model => {
  const sequelizeModel = model(sequelize, Sequelize);
  db[sequelizeModel.name] = sequelizeModel;
});

//Apply associations
Object.keys(db).forEach(key => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;