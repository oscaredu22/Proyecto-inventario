;
const express = require('express');
const api = express.Router(),
    crudController = require('../../app/Http/Controllers/reservations_controller'),
    middlewares = require('../../app/Http/Middelware/jwt_middleware');

//api.post('/register', middlewares.ensureToken,crudController.registerReservations);
api.put('/register', middlewares.ensureToken, crudController.registerReservations);
api.post('/get', middlewares.ensureToken, crudController.getReservations);
api.post('/update', middlewares.ensureTokenAdmin, crudController.updateReservations);
api.post('/delete', middlewares.ensureTokenAdmin, crudController.deleteReservations);
api.post('/getHours', middlewares.ensureTokenAdmin, crudController.getUsedHours);

module.exports = api;
