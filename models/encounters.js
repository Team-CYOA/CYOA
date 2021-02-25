'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encounters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      encounters.belongsToMany(models.options, {through: "choice"});
    }
  };
  encounters.init({
    encounterText: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'encounters',
  });
  return encounters;
};