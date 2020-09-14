const sequelize = require("../Sequelize/sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: type.STRING,
    password: type.STRING,
    email: type.STRING,
    verified: type.BOOLEAN,
    verificationId: type.STRING
  })
}