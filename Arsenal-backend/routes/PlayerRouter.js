const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/', controller.GetPlayers)
Router.get('/:id', controller.GetPlayer)

module.exports = Router