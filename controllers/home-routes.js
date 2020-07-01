const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, User } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
    Course.findAll({
      attributes: [
        'id',
        'course_url',
        'title',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbCourseData => {
        const courses = dbCourseData.map(course => course.get({ plain: true }));
        res.render('homepage', { courses });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });

module.exports = router;