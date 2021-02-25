'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activeChar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  activeChar.init({
    name: DataTypes.STRING,
    hasShoes: DataTypes.BOOLEAN,
    hasTools: DataTypes.BOOLEAN,
    hasSpacesuit: DataTypes.BOOLEAN,
    engineDestroyed: DataTypes.BOOLEAN,
    canTrade: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'activeChar',
  });
  return activeChar;
};