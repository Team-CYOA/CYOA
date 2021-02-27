// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'options', // name of Source model
      'encounterID', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'encounters', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      'options', // name of Source model
      'encountersID', // key we want to remove
    );
  },
};
