const { body } = require('express-validator');

/**
 * Validates the request body of contacts sent by the user.
 */
const validateContacts = [
  body('name').trim().isLength({ min: 3 }),
  body('mobileNumber').isNumeric().isLength({ min: 10, max: 10 }),
  body('address').isLength({ min: 5 }),
  body('email').isEmail(),
];

module.exports = validateContacts;
