const express = require('express');
const server = express();
const dotenv = require('dotenv').config();

//Rotas
server.use(require('./src/routes'))


server.listen(process.env.PORT);
console.log(`Instacia do servidor iniciado na porta ${process.env.PORT}.`);
