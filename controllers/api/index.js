const router = require('express').Router();

const userRoutes = require('./user-routes');
const courseRoutes = require('./course-routes');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);

const studentRoutes = require('./student-routes');
router.use('/students', studentRoutes);

const teachersRoutes = require('./user-routes');
router.use('/teacher', teachersRoutes);

const homepageRoutes = require('./grades.-routes');
router.use('/homepage', homepageRoutes);

module.exports = router;