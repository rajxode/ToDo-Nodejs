// importing express
const express = require('express');

// setting up the route
const router = express.Router();

// importing controller for home 
const homeController = require('../controllers/home_controller');

// using controller for corresponding routes
router.get('/',homeController.home);

// connecting with router of creating new task
router.use('/newItem',require('./newItem'));


// connecting with router of delete task 
router.use('/deleteItem',require('./delete'));

// exporting router for further use
module.exports = router;