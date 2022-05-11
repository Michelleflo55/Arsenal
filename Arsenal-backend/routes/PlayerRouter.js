const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/', controller.GetPlayers)

module.exports = Router