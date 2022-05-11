const res = require('express/lib/response')
const { Player, sequelize, Choose_weapons } = require('./models')
const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
  }

  const getPlayers = async () => {
      try {
        const data = await Player.findAll()
        stringify(data)

      } catch (error) {
          throw(error)
      }
  }

  const getPlayerById = async (id) => {
      try {
        const player = await Player.findByPk(1)
        stringify(player)
      } catch (error) {
          throw(error)
      }
  }

  const getWeapons = async () => {
    try {
      const weapons = await Choose_weapons.findAll()
      stringify(weapons)
    } catch (error) {
      throw(error)
    }
  } 

  const createWeapon = async () => {
    try {
      const newWeapon = await Choose_weapons.create({
        name: 'bat',
        speed: 5,
        power: 4,
        image: 'https.com',
        damageLevel: 10 
      })
      stringify(newWeapon)
    } catch (error) {
      throw(error)
    }
  }

  const updateWeapon = async () => {

    const update = await Choose_weapons.update({ name: 'hammerNew'}, {where: {name: 'Spiked club'}},)
      stringify(update)
  }
   
  const deleteWeapon = async (id) => {
    
    const killArm = await Choose_weapons.destroy({where: {id: 7}})
    stringify(killArm, 'weapon is destroyed')
  } 
  


  async function main() {
      try {
        // await getPlayers()
        // await getPlayerById()
        // await getWeapons()
          // await createWeapon()
          // await updateWeapon()
          // await deleteWeapon()
      } catch (error) {
            throw(error)
      } finally {
          sequelize.close()
      }
  }



  main()