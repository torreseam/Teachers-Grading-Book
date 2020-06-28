const router = require('express').Router();
const { Course, Teacher, Student, Grade } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  Course.findAll({
    attributes: ['id', 'name', 'department'],
    include: [
      // include the Teacher and Student models here:
      {
        model: Teacher,
        attributes: ['id', 'name']
      },
      {
        model: Student,
        attributes: ['id', 'name']
      }
    ]
   })
    .then(dbRosterData => res.json(dbRosterData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// find one course
router.get('/:id', (req, res) => {
  Course.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'department'],
    include: [
      // include the Teacher and Student models here:
      {
        model: Teacher,
        attributes: ['id', 'name']
      },
      {
        model: Student,
        attributes: ['id', 'name'],
          include: [{
            model: Grade,
            attributes: ['id', 'student_id', 'course_id', 'assignment', 'score']
          }]
        }
    ]
  })
    .then(dbCourseData => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'No course found with this id' });
        return;
      }
      res.json(dbCourseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
