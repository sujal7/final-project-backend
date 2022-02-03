const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signUp = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }
  const email = req.body.email;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        password: hashedPassword,
      });
      return user.save();
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: 'User has been created.', userId: result._id });
    })
    .catch((err) => {
      console.log(err);
    });
};
