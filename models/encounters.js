module.exports = (sequelize, DataTypes) => {
    const encounters = sequelize.define('encounters', {
      // expected dataType for activeChar
      encounterText: DataTypes.STRING,
    });
  
    //associated with options
    //activeChar.associate = (models) => {
      // Associating activeChar with Posts
    //};
  
    return encounters;
  };