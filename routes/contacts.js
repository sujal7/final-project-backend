const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validateContacts = require('../middleware/contacts');

router.post('/contacts', validateContacts, contactsController.addContact);

module.exports = router;
