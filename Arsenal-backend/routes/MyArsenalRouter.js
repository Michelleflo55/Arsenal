const Router = require('express').Router()
const controller = require('../controllers/MyArsenalController')

Router.get('/', controller.GetMyArsenal)
Router.delete('/:player/:weapon', controller.DeleteWeaponFromArsenal)
Router.delete('/:player', controller.DeleteMyArsenal)
Router.put('/update', controller.UpdateArsenal)

module.exports = Router