'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crud_weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Crud_weapon.belongsToMany(models.Player, {
        through: models.Arsenal_crud,
        as: 'crud_weapon',
        foreignKey: 'crud_weaponId'
      })
    }
  }
  Crud_weapon.init({
    name: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Crud_weapon',
    tableName: 'crud_weapons'
  });
  return Crud_weapon;
};