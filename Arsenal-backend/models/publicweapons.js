'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Public_weapons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Public_weapons.belongsToMany(models.Player, {
        through: models.My_arsenal,
        as: 'weapons',
        foreignKey: 'public_weaponsId'
      })
    }
  }
  Public_weapons.init({
    name: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    image: DataTypes.STRING,
    damageLevel:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'public_weapons',
    tableName: 'public_weapons'
  });
  return Public_weapons;
}