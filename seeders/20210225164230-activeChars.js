'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('activeChars', [{
        name: "Paul Atreides",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Han Solo",
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activeChars', null, {});
  }
};
