const express = require('express');
const eventosController = require('../controller/eventosController');
const ambientController = require('../controller/ambienteController');

const routers = express.Router();

//Evento
routers.get('/listarEvento', eventosController.getEvent)
routers.post('/inserirEvento', eventosController.insertEvent)

//Ambiente
routers.get('/listarAmbiente', ambientController.getAmbient)

module.exports = routers