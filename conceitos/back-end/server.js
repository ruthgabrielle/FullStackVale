const express = require('express');
const server = express();
const dotenv = require('dotenv').config();

//Configurações
server.use(express.json()); //permite resposta ao cliente em formato json

//Rotas
server.use(require('./src/routes'))

server.listen(3002, '127.0.0.1');
server.listen(process.env.PORT);
console.log(`Node server running on port 3002`);
