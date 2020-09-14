const express = require('express')
const api = require('./src/routes')

require('dotenv').config();
const db = require('./src/Sequelize/sequelize');

const app = express()
const port = 3000

app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})