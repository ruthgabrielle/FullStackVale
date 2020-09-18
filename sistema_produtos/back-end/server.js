const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Configurações
server.use(express.json());

//Database
mongoose.connect(process.env.MONGO,{useNewUrlParser : true, useUnifiedTopology : true});

//Models
requireDir('./src/models')

//Rotas
server.use(require('./src/routes'));


server.listen(process.env.PORT);
console.log(`Node server running on port ${process.env.PORT}`);