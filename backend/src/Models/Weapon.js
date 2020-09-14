const sequelize = require("../Sequelize/sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define('weapon', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    trial: type.STRING,
    damage: type.INTEGER,
    notes: type.STRING,
    image: type.STRING
  })
}