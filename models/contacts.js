const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const contactsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
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
