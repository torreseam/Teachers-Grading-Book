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