// Once the routes are imported to server.js, they'll already be packaged and ready to go with this one file

const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;