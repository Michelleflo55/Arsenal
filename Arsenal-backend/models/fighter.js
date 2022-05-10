'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Fighter.belongsTo(models.Player, { foreignKey: 'playerId'})
    }
  }
  Fighter.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    health: DataTypes.INTEGER,
    choose_weaponsId: DataTypes.INTEGER,
    playerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        models: 'players',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Fighter',
    tableName: 'fighters'
  });
  return Fighter;
};