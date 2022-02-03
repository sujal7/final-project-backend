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

exports.displayContact = (req, res, next) => {
  Contacts.find()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateContact = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }
  Contacts.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
  })
    .then(() => {
      res.status(200).send('Contact updated successfully.');
    })
    .catch((err) => console.log(err));
};

exports.removeContact = (req, res, next) => {
  Contacts.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).send('Contact deleted successfully.');
    })
    .catch((err) => console.log(err));
};
