// importing express
const express = require('express');

// setting up the route
const router = express.Router();

// importing controller for home 
const homeController = require('../controllers/home_controller');

console.log('Routers running');

// using controller for corresponding routes
router.get('/',homeController.home);


// exporting router for further use
module.exports = router;