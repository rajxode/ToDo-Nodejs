// importing express
const express = require('express');

// setting up the route
const router = express.Router();

// importing controller for home 
const newItemController = require('../controllers/newItem_controller');

// using controller for corresponding routes
router.post('/',newItemController.new);

// exporting router for further use
module.exports = router;