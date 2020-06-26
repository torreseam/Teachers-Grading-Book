const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Class model
class Roster extends Model {}

// define table columns and configuration
Roster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'roster'
  }
);

module.exports = Roster;