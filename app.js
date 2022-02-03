const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use('/', userRoute);

mongoose
  .connect(
    'mongodb+srv://sujal:Q4pkszq6HRhbBZMf@cluster0.eh1wg.mongodb.net/project?retryWrites=true&w=majority'
  )
  .then((result) => {
    app.listen(port, () => {
      console.log('Server ready at ' + port);
    });
  })
  .catch((err) => console.log(err));
