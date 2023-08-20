const database = require("../config/database");

database.user = require("../model/userSchema")(
  database.sequelize,
  database.DataTypes
);

database.task = require("../model/taskSchema")(
  database.sequelize,
  database.DataTypes
);

database.user.hasMany(database.task, {
  foreignKey: "user_id",
});
database.task.belongsTo(database.user, {
  foreignKey: "user_id",
});

database.sequelize.sync();
const db = database;
module.exports = db;
