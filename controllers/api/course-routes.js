const router = require('express').Router();
const { Course, Teacher, Student } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  Course.findAll({
    attributes: [
      'id',
      'name',
      'department'
    ],
    include: [
      // include the Teacher model here:
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


module.exports = router;
