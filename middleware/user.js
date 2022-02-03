const { body } = require('express-validator');

const validateUser = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('password').trim().isLength({ min: 5 }),
];

module.exports = validateUser;
