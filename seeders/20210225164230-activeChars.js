module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('activeChars', [{
      name: 'Paul Atreides',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Han Solo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('activeChars', null, {});
  },
};
