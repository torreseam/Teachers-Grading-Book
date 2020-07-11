const router = require('express').Router();
const { Student } = require('../../models');

router.get('/', (req, res) => {
   Student.findAll({
       attributes: ['name', 'quiz', 'homework', 'tests', 'days_absent']
   })
      .then(dbStudentData => res.json(dbStudentData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.get('/:id', (req, res) => {
   Student.findAll({
    attributes: ['name', 'quiz', 'homework', 'tests', 'days_absent']
   })
      .then(dbStudentData => res.json(dbStudentData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', (req, res) => {
   // check the session
   if (req.session) {
     Student.create({
        course_id: req.params.id,
        name: req.body.name,
        quiz: req.body.quiz,
        homework: req.body.homework,
        tests: req.body.tests,
        days_absent: req.body.days_absent
     })
       .then(dbStudentData => res.json(dbStudentData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });


module.exports = router;