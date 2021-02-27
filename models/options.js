'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
  class options extends Model {

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

module.exports = options;