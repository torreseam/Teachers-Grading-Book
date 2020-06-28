const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course } = require('../models');

router.get('/', (req, res) => {
   res.render('gradebook', {Course})
      
});


module.exports = router;