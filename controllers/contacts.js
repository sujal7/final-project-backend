const { validationResult } = require('express-validator');

const Contacts = require('../models/contacts');

/**
 *
 * Add a new contact to the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message.
 */
exports.addContact = (req, res) => {
  // Checks if the request body is validated from the middleware.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }

  // Creates a new contact object with the entered data from the user.
  const contacts = new Contacts({
    name: req.body.name,
    photo: req.body.photo,
    phone: {
      mobileNumber: req.body.mobileNumber,
      workNumber: req.body.workNumber,
      homeNumber: req.body.homeNumber,
    },
    address: req.body.email,
    email: req.body.email,
  });

  // Saves the contact object to the database.
  contacts
    .save()
    .then(() => {
      return res.status(200).send('User has been succsessfully created.');
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * Display contacts from the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and JSON object of contacts.
 */
exports.displayContact = (req, res) => {
  // Finds all contacts from the database.
  Contacts.find()
    .then((contacts) => {
      return res.status(200).json(contacts);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * Update a contact to the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message.
 */
exports.updateContact = (req, res) => {
  // Checks if the request body is validated from the middleware.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation Failed, entered data is incorrect.',
      errors: errors.array(),
    });
  }

  // Finds a contact by id and updates it with the entered data from the user.
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
      return res.status(200).send('Contact updated successfully.');
    })
    .catch((err) => console.log(err));
};

/**
 *
 * Removes a contact from the database.
 * @param {Object} req - The request sent by the user.
 * @param {Object} res - The response sent to the user.
 * @returns A response with status code and message.
 */
exports.removeContact = (req, res) => {
  // Finds a contact by id and removes it.
  Contacts.findByIdAndRemove(req.params.id)
    .then(() => {
      return res.status(200).send('Contact deleted successfully.');
    })
    .catch((err) => console.log(err));
};
