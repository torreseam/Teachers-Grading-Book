const router = require('express').Router();
const { Student, Grade } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all students
router.get('/', (req, res) => {
  Student.findAll({
    attributes: ['id', 'name'],
    include: [
      // include the Grade model here:
      {
        model: Grade,
        attributes: ['id', 'assignment', 'score']
      }
    ]
  })
    .then(dbStudentData => res.json(dbStudentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// find one Student
router.get('/:id', (req, res) => {
  Student.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name'],
    include: [
      // include the Grade model here:
      {
        model: Grade,
        attributes: ['id', 'assignment', 'score']
      }
    ]
  })
    .then(dbStudentData => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No student found with this id' });
        return;
      }
      res.json(dbStudentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/student
router.post('/', (req, res) => {
    Student.create({
      name: req.body.name,
      user_id: req.body.user_id,
    })
      .then(dbStudentData => res.json(dbStudentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
  Course.update(
    {
      name: req.body.name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbStudentData => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No Course found with this id' });
      }
      res.json(dbStudentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Course.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbStudentData => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No Course found with this id' });
        return;
      }
      res.json(dbStudentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
