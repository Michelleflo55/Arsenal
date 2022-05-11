const Router = require('express').Router()
const controller = require('../controllers/WeaponsController')

Router.get('/', controller.GetWeapons)
Router.get('/:id', controller.GetWeapon)
Router.post('/new', controller.CreateWeapon)
Router.put('/:id', controller.UpdateWeapon)
Router.delete('/:id', controller.DeleteWeapon)

module.exports = Router