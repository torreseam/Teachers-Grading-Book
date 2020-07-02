const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, User } = require('../models');

router.get('/', (req, res) => {
  res.render('titlepage');
});

router.get('/homepage', (req, res) => {
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
        res.render('homepage', { 
          courses,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });

  
router.get('/course/:id', (req, res) => {
    Course.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'course_url',
        'title'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbCourseData => {
        if (!dbCourseData) {
          res.status(404).json({ message: 'No course found with this id' });
          return;
        }
  
        // serialize the data
        const course = dbCourseData.get({ plain: true });
  
        // pass data to template
        res.render('singleclass', {
           course,
           loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;