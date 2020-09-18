const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    email: String,
    senha: String, 
    nome: String,
    cargo: String
}, {timestamps : true});

mongoose.model('Usuario', UsuarioSchema);