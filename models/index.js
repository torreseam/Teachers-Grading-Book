const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');

const User = require('./User');
const Student = require('./Student');
const Course = require('./Course');


// create associations
User.hasMany(Course, {
  foreignKey: 'user_id'
});

Course.belongsTo(User, {
  foreignKey: 'user_id',
});

//Students
Student.belongsToMany(Course, {
  through: 'studentCourse',
  foreignKey: 'student_id'
});

module.exports = { User, Student, Course };