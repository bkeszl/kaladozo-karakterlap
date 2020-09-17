const { models } = require("../Sequelize");
const trialService = require("./trialService");

async function validateWeapon(weapon) {
  let missingParams = [];
  if (weapon.name === undefined) {
    missingParams.push("name");
  }
  if (weapon.trial === undefined) {
    missingParams.push("trial");
  }
  if (weapon.damage === undefined) {
    missingParams.push("damage");
  }
  if (weapon.notes === undefined) {
    missingParams.push("notes");
  }
  if (weapon.image === undefined) {
    missingParams.push("image");
  }
  if (missingParams.length > 0) {
    return { code: 400, status: missingParams + " fields are missing!" };
  }
  if (!trialService.validateTrial(weapon.trial)) {
    return { code: 400, status: "No such trial!" };
  }
  let checkWeaponDb = await models.weapon.findAll({
    where: {
      name: weapon.name,
    },
  });
  if (checkWeaponDb.length > 0) {
    return { code: 409, status: "Weapon name already exists!" };
  }
  return { code: 200, status: "OK" };
}

async function createWeapon(weapon) {
  let weaponValidator = await validateWeapon(weapon);
  if (weaponValidator.code === 200){
    await models.weapon.create(weapon);
  }
  return weaponValidator;
}

module.exports = {
  createWeapon
}