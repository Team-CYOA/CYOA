const activeChar = require('./activeChar');
const encounters = require('./encounters');
const options = require('./options');
const pastChar = require('./pastChar');

encounters.hasMany(options, {
  foreignKey: 'encounterID',
  onDelete: 'CASCADE',
});

options.belongsTo(encounters, {
  foreignKey: 'encounterID',
  onDelete: 'CASCADE',
});

module.exports = {
  activeChar,
  encounters,
  options,
  pastChar,
};
