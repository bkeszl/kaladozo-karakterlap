module.exports = (sequelize, type) => {
  return sequelize.define('character', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    //todo: create mapping from character sheet to database table columns
  })
}