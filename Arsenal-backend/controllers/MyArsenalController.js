const { My_arsenal, Player, Choose_weapons} = require('../models')

const GetMyArsenal = async (req, res) => {
    try {
       const arsenal = await Player.findAll({
           include: [
               {
                   model: Choose_weapons,
                   as: 'arsenal'
               }
           ]
       })
       res.send(arsenal) 
    } catch (error) {
        throw(error)
    }
}

const DeleteWeaponFromArsenal = async ( req, res ) => {
    try {
        
        await My_arsenal.destroy({
            where:{
            choose_weaponsId: req.params.weapon,
            playerId:req.params.player
            }
        })
        res.send('Fighting weapon has been destroyed')
    } catch (error) {
      throw(error)  
    }
}

const DeleteMyArsenal = async ( req, res ) => {
    try {
        await My_arsenal.destroy({ 
            where:{
            playerId: req.params.player
            }
          })
          res.send('Your Arsenal is empty') 
    } catch (error) {
        throw(error)
    }
}


module.exports = {
    GetMyArsenal,
    DeleteWeaponFromArsenal,
    DeleteMyArsenal
}