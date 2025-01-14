// app.js - new file at top level
const express = require('express')
const swaggerUi = require('swagger-ui-express');
const app = express()


app.use('/', express.static('public'))
// map all routes to the express app
const calculatorRoutes =
require('./routes/route');
app.use('/calculator', calculatorRoutes);

//https://catfact.ninja/
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);
// export the app
module.exports = app;