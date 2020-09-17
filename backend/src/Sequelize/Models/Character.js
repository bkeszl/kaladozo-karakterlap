const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('character', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    legacy: DataTypes.STRING,
    level: DataTypes.STRING,
    damageTaken : DataTypes.INTEGER,
    focusUsed: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    mind: DataTypes.INTEGER,
    intelligence: DataTypes.INTEGER,
    culture: DataTypes.INTEGER,
    medicine: DataTypes.INTEGER,
    senses: DataTypes.INTEGER,
    attention: DataTypes.INTEGER,
    scanning: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    physique: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    intimidation: DataTypes.INTEGER,
    personality: DataTypes.INTEGER,
    composure: DataTypes.INTEGER,
    presentation: DataTypes.INTEGER,
    persuasion: DataTypes.INTEGER,
    instinct: DataTypes.INTEGER,
    magic: DataTypes.INTEGER,
    anticipation: DataTypes.INTEGER,
    reflex: DataTypes.INTEGER,
    skillfullness: DataTypes.INTEGER,
    acrobatics: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    stealth: DataTypes.INTEGER,
    trainingMain: DataTypes.STRING,
    trainingMainLevel: DataTypes.INTEGER,
    trainingSecondary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trainingSecondaryLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currency: DataTypes.INTEGER,
    inventory: DataTypes.STRING,
    physicalDefence: DataTypes.STRING,
    magicalDefence: DataTypes.STRING,
    languages: DataTypes.STRING,
    proficiencies: DataTypes.STRING
  })
}