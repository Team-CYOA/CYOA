'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
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
      }
    ).then(() => {
      return queryInterface.addColumn(
        'encounters', // name of Target model
        'optionID', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'options', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'options', // name of Source model
      'encountersID' // key we want to remove
    ).then(() => {
      // remove Payment hasOne Order
      return queryInterface.removeColumn(
        'Orders', // name of the Target model
        'PaymentId' // key we want to remove
      );
    });
  }
};
