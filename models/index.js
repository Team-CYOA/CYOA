const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

//path to config file

const basename = path.basename(module.filename);
const env = process.env.JAWSDB_URL || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};
let sequelize;

// create sequelize instance

if (config.JAWSDB_URL) {
  sequelize = new Sequelize(process.env[config.JAWSDB_URL]);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// associate other models with sequelize model

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// export all models as db package

module.exports = db;