module.exports = (sequelize, DataTypes) => {
    const activeChar = sequelize.define('activeChar', {
      // expected dataType for activeChar
      name: DataTypes.STRING,
      hasShoes: {
          type: DataTypes.BOOLEAN,
          defaultValue: 1
      },
      hasTools: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      hasSpacesuit: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      engineDestroyed: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      canTrade: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    });
  
    //associate with other tables
    //activeChar.associate = (models) => {
      // Associating activeChar with Posts
    //};
  
    return activeChar;
  };