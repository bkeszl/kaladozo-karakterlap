const { Sequelize } = require('sequelize');
const UserModel = require('../Models/User')

const sequelize = new Sequelize(process.env.DB_URL, process.env.DB_USER, process.env.DB_PASS, {
  host: "127.0.0.1",
  dialect: "mysql"
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

  module.exports = {
    User
  }