const {
  Model, DataTypes,
} = require('sequelize');
const sequelize = require('../config/connection');

class pastChar extends Model {

}
pastChar.init({
  pastName: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'pastChar',
});

module.exports = pastChar;
