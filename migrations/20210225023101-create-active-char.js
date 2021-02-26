// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activeChars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      hasShoes: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      hasTools: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      hasSpacesuit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      engineDestroyed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      canTrade: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activeChars');
  },
};
