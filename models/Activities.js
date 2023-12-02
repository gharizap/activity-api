const { Sequelize } = require("sequelize");
const db = require("../config/Database");

const { DataTypes } = Sequelize;

const Activities = db.define(
  "activities",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: "users",
        key: "id",
      },
    },
    activity_days: DataTypes.STRING,
    activity_type: DataTypes.STRING,
    activity_details: DataTypes.TEXT,
    activity_timestart: DataTypes.TIME,
    activity_timeend: DataTypes.TIME,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Activities;
