const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, User } = require('../models');

router.get('/courses', (req, res) => {
    Course.findAll({
      attributes: [
        'id',
        'course_url',
        'title',
        'created_at'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbCourseData => {
        // pass a single Course object into the homepage template
        const courses = dbCourseData.map(course => course.get({ plain: true }));
        res.render('courses', { courses});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;