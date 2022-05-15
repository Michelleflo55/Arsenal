'use strict';
const { Player, Public_weapons } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const players = await Player.findAll({ raw:true })
    
    const publicWeapons = await Public_weapons.findAll({ raw: true })
    
    const my_arsenal = publicWeapons.map((a) => ({
      playerId: players[Math.floor(Math.random() * players.length)].id,
      public_weaponsId: publicWeapons[Math.floor(Math.random() * publicWeapons.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('my_arsenals', my_arsenal)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('my_arsenals')
  }
};
