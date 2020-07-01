const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, User } = require('../models');

router.get('/', (req, res) => {
  Course.findAll({
    // where: {
    //   // use the ID from the session
    //   user_id: req.session.user_id
    // },
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
      // serialize data before passing to template
      const courses = dbCourseData.map(course => course.get({ plain: true }));
      res.render('createcourse', { courses });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;