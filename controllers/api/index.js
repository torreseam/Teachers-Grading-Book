const router = require('express').Router();

const userRoutes = require('./user-routes');
const courseRoutes = require('./course-routes');
const studentRoutes = require('./student-routers');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;