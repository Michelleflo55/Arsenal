const Router = require('express').Router()
const controller = require('../controllers/MyArsenalController')

Router.get('/', controller.GetMyArsenal)
module.exports = Router