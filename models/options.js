module.exports = (sequelize, DataTypes) => {
    const options = sequelize.define('options', {
      // expected dataType for activeChar
      optionText: DataTypes.STRING,
      consequenceText: {
          type: DataTypes.STRING,
          allowNull: true
      },    
      result: {
          type: DataTypes.STRING,
          allowNull: true
      },
      nextEncounter: {
          type: DataTypes.INTEGER,
          allowNull: true
      }

    });
  
    //associated with options
    //activeChar.associate = (models) => {
      // Associating activeChar with Posts
    //};
  
    return options;
  };