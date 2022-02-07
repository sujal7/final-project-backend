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
  // const phone = req.body.phone;
  const mobileNumber = req.body.mobileNumber;
  const workNumber = req.body.workNumber;
  const homeNumber = req.body.homeNumber;
  const address = req.body.address;
  const email = req.body.email;
  const photo = req.body.photo;
  console.log(photo);
  const contacts = new Contacts({
    name: name,
    photo: photo,
    phone: {
      mobileNumber: mobileNumber,
      workNumber: workNumber,
      homeNumber: homeNumber,
    },
    // phone: phone,
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
    photo: req.body.photo,
    phone: {
      mobileNumber: req.body.mobileNumber,
      workNumber: req.body.workNumber,
      homeNumber: req.body.homeNumber,
    },
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
