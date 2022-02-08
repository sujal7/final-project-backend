const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validateContacts = require('../middleware/contacts');

const isAuth = require('../middleware/isAuth');

/**
 * Handles POST request in /contacts endpoint.
 */
router.post(
  '/contacts',
  isAuth,
  validateContacts,
  contactsController.addContact
);

/**
 * Handles GET request in /contacts endpoint.
 */
router.get('/contacts', isAuth, contactsController.displayContact);

/**
 * Handles PUT request in /contacts/:id endpoint.
 */
router.put(
  '/contacts/:id',
  isAuth,
  validateContacts,
  contactsController.updateContact
);

/**
 * Handles DELETE request in /contacts/:id endpoint.
 */
router.delete('/contacts/:id', isAuth, contactsController.removeContact);

module.exports = router;
