const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Class model
class Student extends Model {}

// define table columns and configuration
Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quiz: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    homework: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tests: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    days_absent: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student'
  }
);

module.exports = Student;