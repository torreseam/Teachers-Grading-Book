const router = require('express').Router();
const { Course, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Course.findAll({
    attributes: ['id', 'course_url', 'title'],
    order: [['created_at', 'DESC']], 
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Course.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'course_url', 'title'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCourseData => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'No Course found with this id' });
        return;
      }
      res.json(dbCourseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {title: 'History', course_url: 'US History', user_id: 1}
  Course.create({
    title: req.body.title,
    course_url: req.body.course_url,
    user_id: req.body.user_id
  })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Course.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCourseData => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'No Course found with this id' });
        return;
      }
      res.json(dbCourseData);
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
    .then(dbCourseData => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'No Course found with this id' });
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