'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activeChars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      hasShoes: {
        type: Sequelize.BOOLEAN
      },
      hasTools: {
        type: Sequelize.BOOLEAN
      },
      hasSpacesuit: {
        type: Sequelize.BOOLEAN
      },
      engineDestroyed: {
        type: Sequelize.BOOLEAN
      },
      canTrade: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('activeChars');
  }
};