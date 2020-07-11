// const User = require("./User");
// const Course = require("./Course");
// const Student = require("./Student");

// // create associations
// User.hasMany(Course, {
//   foreignKey: 'user_id'
// });

// Course.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// module.exports = { User, Course, Student };

const User = require('./User');
const Course = require('./Course');
const Student = require('./Student');

// create associations
User.hasMany(Course, {
   foreignKey: 'user_id'
});

Course.belongsTo(User, {
   foreignKey: 'user_id',
});

Course.hasMany(Student, {
   foreignKey: "id"
})

module.exports = {
   User,
   Course,
   Student
};