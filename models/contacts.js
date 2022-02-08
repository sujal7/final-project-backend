const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema for different type of phone numbers i.e. mobile, work and home.
 */
const phoneSchema = new Schema({
  mobileNumber: {
    type: Number,
    required: true,
  },
  workNumber: {
    type: Number,
  },
  homeNumber: {
    type: Number,
  },
});

/**
 * Schema for contacts.
 */
const contactsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  // Nested schema for phone numbers.
  phone: {
    type: phoneSchema,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Contacts', contactsSchema);
