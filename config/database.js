const { Sequelize, DataTypes, Op } = require("sequelize");

const hostname = process.env.HOST;
const db_port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const dbname = process.env.DB_NAME;
const pd = process.env.DIALECT;

const database = {};

const sequelize = new Sequelize(dbname, username, password, {
  host: hostname,
  port: db_port,
  dialect: pd,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((error) => {
    console.log("Unable to connect to the database", error);
  });

database.sequelize = sequelize;
database.DataTypes = DataTypes;
database.Op = Op;

module.exports = database;
