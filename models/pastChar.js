module.exports = (sequelize, DataTypes) => {
    const pastChar = sequelize.define('pastChar', {
      // expected dataType for activeChar
      pastCharName: DataTypes.STRING,
    });
  
    //associate with other tables
    //activeChar.associate = (models) => {
      // Associating activeChar with Posts
    //};
  
    return pastChar;
  };