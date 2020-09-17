const { Sequelize } = require('sequelize');
const {applyExtraSetup} = require('./extraSetup');

const sequelize = new Sequelize(process.env.DB_URL, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql"
});

const modelDefiners = [
  require('./Models/User'),
  require('./Models/Character'),
  require('./Models/Weapon')
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

sequelize.sync({force: true});

applyExtraSetup(sequelize);

module.exports = sequelize;