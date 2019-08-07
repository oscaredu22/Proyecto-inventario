;
const express = require('express');
const api = express.Router(),
    crudController = require('../../app/Http/Controllers/services_controller');
middlewares = require('../../app/Http/Middelware/jwt_middleware');


api.post('/register', [middlewares.ensureTokenAdmin], crudController.registerServices);
api.post('/update', middlewares.ensureTokenAdmin, crudController.updateServices);
api.delete('/delete', middlewares.ensureTokenAdmin, crudController.deleteServices);
api.get('/get', middlewares.ensureToken, crudController.getServices);
api.post('/get_sub_services', middlewares.ensureToken, crudController.getSubServices);

module.exports = api;
