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
      Fighter.hasMany(models.ChooseWeapons, {
        as: 'arsenal',
        through: models.My_arsenal,
        foreignKey: 'characterId'
      })
    }
  }
  Fighter.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    health: DataTypes.INTEGER,
    weaponsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fighter',
    tableName: 'fighters'
  });
  return Fighter;
};