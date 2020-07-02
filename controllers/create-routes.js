const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, User } = require('../models');

router.get('/', (req, res) => {
  res.render('createcourse', { loggedIn: true });
});

module.exports = router;