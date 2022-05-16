'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arsenal_crud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
    }
  }
  Arsenal_crud.init({
    crud_weaponId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'crud_weapon',
        key: 'id'
      }
    },
    playerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'player',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Arsenal_crud',
    tableName: 'arsenal_cruds'
  });
  return Arsenal_crud;
};