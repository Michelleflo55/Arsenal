'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Choose_weapons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Choose_weapons.belongsTo(models.Fighter, {foreignKey: 'fighterId'})
    }
  }
  Choose_weapons.init({
    name: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    image: DataTypes.STRING,
    damageLevel:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Choose_weapons',
    tableName: 'choose_weapons'
  });
  return Choose_weapons;
}