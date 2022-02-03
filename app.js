const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use('/', userRoute);

mongoose
  .connect(process.env.DB_CREDENTIAL)
  .then((result) => {
    app.listen(port, () => {
      console.log('Server ready at ' + port);
    });
  })
  .catch((err) => console.log(err));
