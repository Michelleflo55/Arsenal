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
module.exports = {
    GetWeapons,
    CreateWeapon
}