// Configurar nuestro contenedor de inyeccion de dependencias

// asClass (metodo ayuda a inyectar un objeto como clase)
// asValue (metodo ayuda a inyectar un objeto como un valor)
// asFunction (metodo ayuda a inyectar el objeto como una function)
const { createContainer, asClass, asValue, asFunction } = require('awilix');


// config
const config = require('../config');
const app = require('.')

// services (importamos el servicio)
const { HomeService } = require("../services");

// Controllers
const { HomeController } = require('../controllers')

// routes
const { HomeRoutes } = require('../routes/index.routes')

const Routes = require('../routes')

const container = createContainer();

// Metodos utiles de container
container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    }).register({
        HomeService: asClass(HomeService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    });

module.exports = container;