const { Choose_weapons } = require('../models')

const GetWeapons = async ( req, res ) => {
    try {
        const weapons = await Choose_weapons.findAll()
        res.send(weapons)
    } catch (error) {
        throw(error)
    }
}

const CreateWeapon = async ( req, res ) => {
    try {
        const newWeapon = await Choose_weapons.create(req.body) 
        await newWeapon.save()
        res.send(newWeapon) 
    } catch (error) {
        throw(error)
    }
}

const UpdateWeapon = async ( req, res ) => {
    try {
        const weaponsId = parseInt(req.params.id)
        const update = await Choose_weapons.update(req.body, {
            where: {id: weaponsId},
            returning: true
        })
        res.send(update)
    } catch (error) {
       throw(error) 
    }
}
module.exports = {
    GetWeapons,
    CreateWeapon,
    UpdateWeapon

}