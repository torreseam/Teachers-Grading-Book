const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');
const Teacher = require('./Teacher');
const Course  = require('./Course');
const Student = require('./Student');
const Grade   = require('./Grade');

Teacher.hasMany(Course, {
  foreignKey: 'teacher_id'
});

Course.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
});

CourseStudent = sequelize.define('courseStudent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
 course_id: {
    type: DataTypes.INTEGER,
    references: 'Course',
    referencesKey: 'id',
    allowNull: false
  },
  student_id: {
    type: DataTypes.INTEGER,
    references: 'Student',
    referencesKey: 'id',
    allowNull: false
  }
});

//Course.belongsToMany(Student, { through: courseStudent });
Course.belongsToMany(
  Student, 
  {
      through: 'courseStudent',
      foreignKey: 'course_id'
  }
)

//Student.belongsToMany(Course, { through: courseStudent });
Student.belongsToMany(
  Course, 
  {
      through: 'courseStudent',
      foreignKey: 'student_id'
  }
)

module.exports = { Teacher, Course, Student, CourseStudent, Grade };
