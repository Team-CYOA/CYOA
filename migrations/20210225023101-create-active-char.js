module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('activeChars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      hasShoes: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      hasTools: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      hasSpacesuit: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      engineDestroyed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      canTrade: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      currentEncounter: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('activeChars');
  },
};
