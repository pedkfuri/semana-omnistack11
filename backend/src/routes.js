const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rota de login 
routes.post('/sessions', SessionController.create);
//TODO

//lista todas as ongs
routes.get('/ongs', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), OngController.index);

//cria uma ong
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

//lista todos os casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

//cria um caso
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentController.create);

//deleta um caso
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),  IncidentController.delete);

//lista os casos de uma ONG
routes.get('/profile', ProfileController.index);
//TODO

module.exports = routes;