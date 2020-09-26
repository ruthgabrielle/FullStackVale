const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//Configurações
server.use(express.json());
server.use(cors());
 

//Banco de dados
mongoose.connect(process.env.MONGO,{useNewUrlParser : true, useUnifiedTopology : true});
 

//Models
requireDir('./src/models');

//Rotas
server.use(require('./src/routes'));


server.listen(process.env.PORT || 3002);
console.log(`Servidor ouvindo na porta ${process.env.PORT}`);