const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports ={
    async criarUsuario(req, res){
        const {email, senha, nome, cargo} = req.body;
        const response = await Usuario.create({
            email, 
            senha, 
            nome, 
            cargo
        });
        res.json(response);
    },
    async autenticaUsuario(req, res){
        const{email, senha} = req.body;
        const usuarioBD = await Usuario.findOne({email, senha});
        res.json(usuarioBD);
    }
}