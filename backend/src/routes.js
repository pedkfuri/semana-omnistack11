const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rota de login 
routes.post('/sessions', SessionController.create);

//lista todas as ongs
routes.get('/ongs', OngController.index);

//cria uma ong
routes.post('/ongs', OngController.create);

//lista todos os casos
routes.get('/incidents', IncidentController.index);

//cria um caso
routes.post('/incidents', IncidentController.create);

//deleta um caso
routes.delete('/incidents/:id', IncidentController.delete);

//lista os casos de uma ONG
routes.get('/profile', ProfileController.index);

module.exports = routes;