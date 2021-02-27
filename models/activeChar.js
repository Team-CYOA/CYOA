'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
//module.exports = (sequelize, DataTypes) => {
  class activeChar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
      // define association here
    //}
  };
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
//  return activeChar;
//};
module.exports = activeChar;
