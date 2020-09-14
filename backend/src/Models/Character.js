module.exports = (sequelize, type) => {
  return sequelize.define('character', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    race: type.STRING,
    age: type.INTEGER,
    gender: type.STRING,
    legacy: type.STRING,
    level: type.STRING,
    damageTaken : type.INTEGER,
    focusUsed: type.INTEGER,
    avatar: type.STRING,
    mindStat: type.INTEGER,
    intelligenceSubStat: type.INTEGER,
    cultureSubStat: type.INTEGER,
    medicineSubStat: type.INTEGER,
    sensesStat: type.INTEGER,
    attentionSubStat: type.INTEGER,
    scanningSubStat: type.INTEGER,
    accuracySubStat: type.INTEGER,
    phisiqueStat: type.INTEGER,
    healthSubStat: type.INTEGER,
    strengthSubStat: type.INTEGER,
    intimidationSubStat: type.INTEGER,
    personalityStat: type.INTEGER,
    composureSubStat: type.INTEGER,
    presentationSubStat: type.INTEGER,
    persuasionSubStat: type.INTEGER,
    instinctStat: type.INTEGER,
    magicSubStat: type.INTEGER,
    anticipationSubStat: type.INTEGER,
    reflexSubStat: type.INTEGER,
    skillfullnessStat: type.INTEGER,
    acrobaticsSubStat: type.INTEGER,
    dexteritiySubStat: type.INTEGER,
    stealthSubStat: type.INTEGER,
    trainingMain: type.STRING,
    trainingMainLevel: type.INTEGER,
    trainingSecondary: {
      type: type.STRING,
      allowNull: true
    },
    trainingSecondaryLevel: {
      type: type.INTEGER,
      allowNull: true
    },
    currency: type.INTEGER,
    inventory: type.STRING,
    physicalDefence: type.STRING,
    magicalDefence: type.STRING,
    languages: type.STRING,
    proficiencies: type.STRING
  })
}