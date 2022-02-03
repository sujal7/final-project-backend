const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('../controllers/user');

router.post(
  '/signUp',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(),
    body('password').trim().isLength({ min: 5 }),
  ],
  userController.signUp
);

module.exports = router;
