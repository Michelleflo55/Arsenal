'use strict';
  const falso = require('@ngneat/falso');
const{Fighter} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fighters = await Fighter.findAll({ raw:true })


    const players = [...Array(5)].map((a) => ({
      username: falso.randUserName(),
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('players', players)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players')
  }
};
