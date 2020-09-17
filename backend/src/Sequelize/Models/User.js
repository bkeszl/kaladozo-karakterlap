const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    verificationId: DataTypes.STRING
  })
}