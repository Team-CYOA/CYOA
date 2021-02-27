const {
  Model, Sequelize, DataTypes,
} = require('sequelize');
const sequelize = require('../config/connection');

class encounters extends Model {

}
encounters.init({
  encounterText: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'encounters',
});

module.exports = encounters;
