const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');

const User = require('./User');
const Student = require('./Student');
const Course = require('./Course');

const Grade = require('./Grade');

User.hasMany(Course, {
  foreignKey: 'user_id'
});

Course.belongsTo(User, {
  foreignKey: 'user_id',
});

//Students
Student.belongsTo(Course, {
  // through: 'studentCourse',
  foreignKey: 'student_id'
});

module.exports = { User, Student, Course };
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

Student.hasMany(Grade, {
  foreignKey: 'student_id'
});

Grade.belongsTo(Course, {
  foreignKey: 'course_id'
})

module.exports = { User, Student, Course, Grade, CourseStudent };
