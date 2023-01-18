// imporitng express 
const express = require('express');

// declaring router variable
const router = express.Router();

// importing delete controller for deletion
const deleteController=require('../controllers/delete_controller');

// calling delete function in controller
router.get('/',deleteController.delTask);


// exporting router for use outside the router
module.exports = router;