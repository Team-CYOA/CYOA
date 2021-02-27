'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
  class pastChar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  //   static associate(models) {
  //     // define association here
  //   }
   };
  pastChar.init({
    pastName: DataTypes.STRING,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pastChar',
  });
//  return pastChar;
//};

module.exports = pastChar;