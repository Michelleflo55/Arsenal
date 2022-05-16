const { Arsenal_crud, Player, Crud_weapon} = require('../models')

const GetCrudArsenal = async (req, res) => {
    try {
       const arsenal = await Player.findAll({
           include: [
               {
                   model: Crud_weapon,
                   as: 'arsenal_crud'
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
        
        await Arsenal_crud.destroy({
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

module.exports = {
    GetCrudArsenal
}