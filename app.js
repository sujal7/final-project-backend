const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const contactsRoute = require('./routes/contacts');

/**
 * Allows header so that we can pass token for authorization.
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Authorization: Bearer token

app.use(bodyParser.json());
app.use('/', userRoute);
app.use('/', contactsRoute);

mongoose
  .connect(process.env.DB_CREDENTIAL)
  .then((result) => {
    app.listen(port, () => {
      console.log('Server ready at ' + port);
    });
  })
  .catch((err) => console.log(err));
