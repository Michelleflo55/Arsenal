'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChooseWeapons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChooseWeapons.init({
    name: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChooseWeapons',
    tableName: 'chooseWeapons'
  });
  return ChooseWeapons;
};