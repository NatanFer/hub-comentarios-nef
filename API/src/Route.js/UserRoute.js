const express = require('express');
const UserController = require('../Controller/userController');
const routes = express.routes();

Router.get('/', UserController.getUser)

module.exports = routes;