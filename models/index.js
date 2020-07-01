const User = require("./User");
const Course = require("./Course");

// create associations
User.hasMany(Course, {
  foreignKey: 'user_id'
});

Course.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Course };
