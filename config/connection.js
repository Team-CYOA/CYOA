const Sequelize = require('sequelize');

const config = require('./config.json');

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;
