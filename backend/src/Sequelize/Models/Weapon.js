const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('weapon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    trial: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    image: DataTypes.STRING
  })
}