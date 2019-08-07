;
const express = require('express');
const api = express.Router(),
    crudController = require('../../app/Http/Controllers/user_controller'),
    middlewares = require('../../app/Http/Middelware/jwt_middleware');

api.put('/register', crudController.registerUser);
api.post('/login', crudController.loginUser);
api.post('/delete', middlewares.ensureTokenAdmin, crudController.deleteUser);
api.post('/update', middlewares.ensureToken, crudController.modifyUser);
api.get('/getProveedores', crudController.getProveedores);

module.exports = api;
