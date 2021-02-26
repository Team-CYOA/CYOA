'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class options extends Model {

    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      options.associate = models => {
        options.belongsTo(models.encounters);
      };
    }
  };
  options.init({
    optionText: DataTypes.STRING,
    nextEncounter: DataTypes.INTEGER,
    consequence: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tResult: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'options',
  });
  return options;
};