// import express module
const express = require('express');

// set up the express router
const router = express.Router();

// import homecontroller
const homeController = require('../controllers/home_controller');

// set the route to homeController (display all added tasks)
router.get('/', homeController.home);

// route to create a task
router.post('/add', homeController.addTask);

// route to delete a task
router.get('/delete/:id', homeController.deleteTask);

// route to delete all tasks
router.get('/clear', homeController.clearAll);

// export the router
module.exports = router;
