const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const createcourseRoutes = require('./create-routes');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use('/createcourse', createcourseRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;