const Sequelize = require('sequelize');

const config = require('./config.json');

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize('mysql://ysz8apqfpluxcsbe:bbb276x5qxksz88c@z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/f9ch08virkoqlbqs');
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
