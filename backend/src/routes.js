const express = require("express");
const SessionController = require("./controllers/SessionController");
const OngController = require("./controllers/OngController");
const IncidentControllers = require("./controllers/IncidentController");
const ProfileControllers = require("./controllers/ProfileController");
const routes = express.Router();

routes.post('/sessions',SessionController.create)

routes.get('/ongs',OngController.index)
routes.post('/ongs',OngController.create)

routes.get('/profile',ProfileControllers.index)

routes.post('/incidents',IncidentControllers.create)
routes.get('/incidents',IncidentControllers.index)
routes.delete('/incidents/:id',IncidentControllers.delete)


module.exports = routes; 