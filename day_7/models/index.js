const dbConfig = require("../config/dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate().then(() => console.log("database conected")).catch(err => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todo = require("./todoModel")(sequelize, Sequelize);
db.user = require("./userModel")(sequelize, Sequelize);



module.exports = db;