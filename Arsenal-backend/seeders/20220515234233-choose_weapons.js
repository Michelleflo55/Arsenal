'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const choose_weapons = [
      {
        name: 'Bloody knuckles',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image:'https://i.ibb.co/sCQ3MMn/bloody-handwraps.png' ,
        damageLevel: falso.randNumber({ min: 15, max: 25 }),       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nunchucks',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/jMLB6B7/nunchucks.png',
        damageLevel: falso.randNumber({ min: 15, max: 25 }),
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Brass knuckles',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/v42dFDG/brass-knuckles.png',
        damageLevel: falso.randNumber({ min: 15, max: 25 }),       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiked club',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/ftMKsk3/spiked-club.png',
        damageLevel: falso.randNumber({ min: 15, max: 25 }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Throwing stars',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/2YHrx91/throwing-stars.png',
        damageLevel: falso.randNumber({ min: 15, max: 25 }),       
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    await queryInterface.bulkInsert('choose_weapons', choose_weapons)
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('choose_weapons')
  }
};
