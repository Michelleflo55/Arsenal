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
      // define association here
    }
  }
  My_arsenal.init({
    weaponId: {
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
        model: 'fighter',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'My_arsenal',
    tableName: 'my_arsenals'
  });
  return My_arsenal;
};