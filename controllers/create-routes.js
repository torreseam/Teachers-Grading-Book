const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, User, Student } = require('../models');

router.get('/', (req, res) => {
  res.render('createcourse', { loggedIn: true });
});

module.exports = router;