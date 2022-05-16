'use strict';
const { Player, Crud_weapon} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const players = await Player.findAll({ raw:true })
    
    const crudWeapon = await Crud_weapon.findAll({ raw: true })
    

    const arsenal_crud = crudWeapon.map((a) => ({
      playerId: players[Math.floor(Math.random() * players.length)].id,
      crud_weaponId: crudWeapon[Math.floor(Math.random() * crudWeapon.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('arsenal_cruds', arsenal_crud)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('arsenal_cruds')
  }
};