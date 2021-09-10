// Configurar nuestro contenedor de inyeccion de dependencias

// asClass (metodo ayuda a inyectar un objeto como clase)
// asValue (metodo ayuda a inyectar un objeto como un valor)
// asFunction (metodo ayuda a inyectar el objeto como una function)
const { createContainer, asClass, asValue, asFunction } = require('awilix');

// services (importamos el servicio)
const { HomeService } = require("../services/home.service");

// Metodos utiles de container
container.register({
    HomeService: asClass(HomeService).singleton()
})

const container = createContainer();

modulo.exports = container;