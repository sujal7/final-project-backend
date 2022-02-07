const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    console.log('error');
    res.status(401).json({ message: 'No token, authorization denied' });
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Token is not valid' });
  }
  if (!decodedToken) {
    console.log('error');
    res.status(401).json({ message: 'Token is not valid' });
  }
  next();
};
