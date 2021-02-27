module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      optionText: {
        type: Sequelize.STRING,
      },
      nextEncounter: {
        type: Sequelize.INTEGER,
      },
      consequence: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      stateChange: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      checkState: {
        type: Sequelize.STRING,
        allowNull: true,
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('options');
  },
};
