const {
  Model, Sequelize, DataTypes,
} = require('sequelize');
const sequelize = require('../config/connection');

class activeChar extends Model {

}
  activeChar.init({
    name: DataTypes.STRING,
    hasShoes: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    hasTools: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hasSpacesuit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    engineDestroyed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    canTrade: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'activeChar',
});

module.exports = activeChar;
