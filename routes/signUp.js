const express = require('express');
const router = express.Router();

router.post('/signUp', (req, res) => {
  console.log(req.body.email);
  res.send(req.body);
});

module.exports = router;
