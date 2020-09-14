const { Sequelize } = require('sequelize');
const UserModel = require('../Models/User');
const CharacterModel = require('../Models/Character');
const WeaponModel = require('../Models/Weapon');


const sequelize = new Sequelize(process.env.DB_URL, process.env.DB_USER, process.env.DB_PASS, {
  host: "127.0.0.1",
  dialect: "mysql"
});

const User = UserModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);
const Weapon = WeaponModel(sequelize, Sequelize);

Character.belongsToMany(Weapon, {through: 'character_weapon'});
Weapon.belongsToMany(Character, {through: 'character_weapon'});

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

  module.exports = {
    User,
    Character,
    Weapon
  }