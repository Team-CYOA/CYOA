const Sequelize = require('sequelize');
// require('dotenv').config();
const config = require('./config.json');

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = sequelize;
