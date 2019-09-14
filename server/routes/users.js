const Router = require('express').Router();
const UserController = require('../controllers/User');

Router.post('/register', UserController.create)
Router.post('/login', UserController.login)

module.exports = Router;