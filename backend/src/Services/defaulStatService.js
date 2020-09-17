const {models} = require('../Sequelize');

async function createDefaultStats() {
  console.log("sutff");
  let mainStats = [
    "mind",
    "senses",
    "physique",
    "personality",
    "instinct",
    "skillfullness",
  ];
  let subStats = [
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
    "presentaion",
    "persuasion",
    "magic",
    "anticipation",
    "reflex",
    "acrobatics",
    "dexterity",
    "stealth",
  ];
  console.log();
  for (let i = 0; i < mainStats.length; i++) {
    models.user.create({
      name: mainStats[i],
      statype: "main",
    });
  }

  for (let i = 0; i < subStats.length; i++) {
    models.stat.create({
      name: subStats[i],
      statype: "sub",
    });
  }
}

module.exports = {
  createDefaultStats
}
