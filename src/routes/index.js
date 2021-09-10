const express = require('express');
// Solicitar Middlewares

// middleware 1
const cors = require('cors');

// middleware 2
const helmet = require('helmet'); //paquete middleware que nos ayuda con brechas de seguridad solo con utilizarlo

// midleware 3
const compression = require('compression'); //ayuda a comprimir las peticiones http

require('express-async-errors'); //importante ayuda a capturar en un middleware las peticiones asincronas

const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares')

//Exportamos una funcion que va a requerir las rutas necesarias
module.exports = function({ HomeRoutes }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression())

    apiRoutes.use('/home', HomeRoutes);
    router.use('/v1/api', apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}