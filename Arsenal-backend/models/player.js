'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsToMany(models.Choose_weapons, {
        as: 'arsenal',
        through: models.My_arsenal,
        foreignKey: 'playerId'
      })
      Player.hasOne(models.Fighter, {foreignKey: 'playerId'})
    }
  }
  Player.init({
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players'
  });
  return Player;
};


