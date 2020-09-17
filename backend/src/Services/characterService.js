const { models } = require('../Sequelize');

async function missingInfoCheck(character) {
  let missingParams = [];
  let params = [
    "name",
    "race",
    "age",
    "gender",
    "legacy",
    "level",
    "damageTaken",
    "focusUsed",
    "avatar",
    "mind",
    "senses",
    "physique",
    "personality",
    "instinct",
    "skillfullness",
    "intelligence",
    "culture",
    "medicine",
    "attention",
    "scanning",
    "accuracy",
    "health",
    "strength",
    "intimidation",
    "composure",
    "presentation",
    "persuasion",
    "magic",
    "anticipation",
    "reflex",
    "acrobatics",
    "dexterity",
    "stealth",
    "trainingMain",
    "currency",
    "inventory",
    "physicalDefence",
    "magicalDefence",
    "languages",
    "proficiencies"
  ];

  params.forEach(param => {
    if(!character.hasOwnProperty(param)){
      missingParams.push(param);
    }
  });

  if (missingParams.length > 0) {
    return { code: 400, status: missingParams + " fields are missing!" };
  }

  return { code: 200, status: "OK"}
}

async function createCharacter(character) {
  let characeterValidity = await missingInfoCheck(character);
  if(characeterValidity.code === 200) {
    let char = await models.character.create(character);
    console.log(char);
  }
  return characeterValidity;
}

module.exports = {
  createCharacter
}