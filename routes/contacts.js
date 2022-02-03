const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validateContacts = require('../middleware/contacts');

router.post('/contacts', validateContacts, contactsController.addContact);
router.get('/contacts', contactsController.displayContact);
router.put('/contacts/:id', validateContacts, contactsController.updateContact);
router.delete('/contacts/:id', contactsController.removeContact);

module.exports = router;
