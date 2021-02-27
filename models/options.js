'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
  class options extends Model {

    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {

    //     options.belongsTo(models.encounters);

    // }
  };
  options.init({
    optionText: DataTypes.STRING,
    nextEncounter: DataTypes.INTEGER,
    consequence: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stateChange: {
      type: DataTypes.STRING,
      allowNull: true
    },
    checkState: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'options',
  });
//  return options;
//};

module.exports = options;