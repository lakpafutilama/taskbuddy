module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "tasks",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Title must be provides",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [0, 300],
            msg: "Description must be less than 300 characters",
          },
        },
      },
      task_status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["Create", "Progress", "Hold", "Complete"]],
            msg: " Task status must be Create, Progress, Hold, Complete",
          },
        },
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["Low", "Medium", "High"]],
            msg: "Priority must be Low, Medium, or High",
          },
        },
      },
      duration: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Duration of project cannot be null",
          },
        },
      },
      added_by: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please add added by",
          },
        },
      },
    },
    {
      paranoid: true,
    }
  );
  return Task;
};
