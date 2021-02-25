'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pastChar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pastChar.init({
    pastName: DataTypes.STRING,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pastChar',
  });
  return pastChar;
};