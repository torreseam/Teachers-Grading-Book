const router = require('express').Router();

const courseRoutes = require('./course-routes');
router.use('/courses', courseRoutes);

const studentRoutes = require('./student-routes');
router.use('/students', studentRoutes);

module.exports = router;