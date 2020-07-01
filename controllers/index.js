const router = require('express').Router();
const coursesRoutes = require('./courses-routes.js');
const homeRoutes = require('./home-routes.js');


const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', coursesRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;