// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// // create our Class model
// class Grade extends Model {}

// // define table columns and configuration
// Grade.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     student_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     course_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     assignment: {  //need to validate, H, Q or T
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     score: {    // need to validate 0 - 100
//       type: DataTypes.INTEGER
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'grade'
//   }
// );

// module.exports = Grade;