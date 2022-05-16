'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const crud_weapons = [
      {
        name: 'Bloody knuckles',
        speed: falso.randNumber({ min: 2, max: 10 }),
        power: falso.randNumber({ min: 2, max: 10}),
        image:'https://i.ibb.co/sCQ3MMn/bloody-handwraps.png' ,
        damage: falso.randNumber({ min: 70, max: 95 }),       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nunchucks',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/jMLB6B7/nunchucks.png',
        damage: falso.randNumber({ min: 70, max: 95 }),
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Brass knuckles',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/v42dFDG/brass-knuckles.png',
        damage: falso.randNumber({ min: 70, max: 95 }),       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiked club',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/ftMKsk3/spiked-club.png',
        damage: falso.randNumber({ min: 70, max: 95 }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Throwing stars',
        speed: falso.randNumber({ min: 2, max: 10}),
        power: falso.randNumber({ min: 2, max: 10}),
        image: 'https://i.ibb.co/2YHrx91/throwing-stars.png',
        damage: falso.randNumber({ min: 70, max: 95 }),       
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    await queryInterface.bulkInsert('crud_weapons', crud_weapons)
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('crud_weapons')
  }
};
