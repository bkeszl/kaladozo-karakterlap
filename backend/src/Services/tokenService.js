const jwt = require('jsonwebtoken');

async function generateToken(user) {
  return jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: 36000 });
}

//todo: implement refresh token

module.exports = {
  generateToken
}