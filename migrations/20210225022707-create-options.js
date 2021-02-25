'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      optionText: {
        type: Sequelize.STRING
      },
      nextEncounter: {
        type: Sequelize.INTEGER
      },
      consequence: {
          type: Sequelize.TEXT,
          allowNull: true
      },
      tResult: {
          type: Sequelize.TEXT,
          allowNull: true 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('options');
  }
};