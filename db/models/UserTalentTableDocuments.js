const {
  Model, UUIDV4,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTalentTableDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTalentTableDocuments.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'talent_table_documents',
  });
  return UserTalentTableDocuments;
};