const express = require('express');
const router = express.Router();

//insert model
const User = require('../Models/UserModel');

//insert controller
const UserController = require('../Controllers/UserController');

router.get("/", UserController.getAllUsers);

router.post("/", UserController.addUsers);

//export
module.exports = router;