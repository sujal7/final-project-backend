const { body } = require('express-validator');

const validateContacts = [
  body('name').trim().isLength({ min: 3 }),
  body('phone').isNumeric().isLength({ min: 7, max: 10 }),
  body('address').isLength({ min: 5 }),
  body('email').isEmail(),
];

module.exports = validateContacts;
