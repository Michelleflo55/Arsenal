const Router = require('express').Router()
const controller = require('../controllers/WeaponsController')

Router.get('/', controller.GetWeapons)
Router.post('/new', controller.CreateWeapon)
Router.put('/:id', controller.UpdateWeapon)

module.exports = Router