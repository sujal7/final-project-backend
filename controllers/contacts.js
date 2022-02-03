const { validationResult } = require('express-validator');

const Contacts = require('../models/contacts');

exports.addContact = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const email = req.body.email;
  const contacts = new Contacts({
    name: name,
    phone: phone,
    address: address,
    email: email,
  });
  contacts
    .save()
    .then(() => {
      return res.status(200).send('User has been succsessfully created.');
    })
    .catch((err) => {
      console.log(err);
    });
};
