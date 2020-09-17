const sequelize = require(".");
const defaultStatService = require('../Services/defaulStatService')

async function applyExtraSetup(sequelize) {
	const { character, weapon } = sequelize.models;
  
  character.belongsToMany(weapon, {through: 'character_weapon'});
  weapon.belongsToMany(character, {through: 'character_weapon'});
}

module.exports = { applyExtraSetup };