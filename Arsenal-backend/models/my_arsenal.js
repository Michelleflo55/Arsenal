'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class My_arsenal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  My_arsenal.init({
    choose_weaponsId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'choose_weapons',
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
    modelName: 'My_arsenal',
    tableName: 'my_arsenals'
  });
  return My_arsenal;
};