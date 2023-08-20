module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name must be provided",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Title must be provides",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
  return User;
};
