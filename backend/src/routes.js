const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('routing yay')
})

router.post('/users/new', (req, res) => {
  User.create(req.body).then(user => res.json(user))
})

module.exports = router;