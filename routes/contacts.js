const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validateContacts = require('../middleware/contacts');

const isAuth = require('../middleware/isAuth');

router.post(
  '/contacts',
  isAuth,
  validateContacts,
  contactsController.addContact
);
router.get('/contacts', isAuth, contactsController.displayContact);
router.put(
  '/contacts/:id',
  isAuth,
  validateContacts,
  contactsController.updateContact
);
router.delete('/contacts/:id', isAuth, contactsController.removeContact);

module.exports = router;
