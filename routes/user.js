const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const validateUser = require('../middleware/user');

router.post('/signUp', validateUser, userController.signUp);

module.exports = router;
