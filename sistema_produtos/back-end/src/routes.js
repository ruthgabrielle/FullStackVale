const express = require('express');
const routes = express.Router();
const produtoController = require('./controllers/produtoController')
const usuarioController = require('./controllers/usuarioController')


//Produto
routes.get('/produtos', produtoController.listarProdutos);
routes.post('/produtos', produtoController.cadastrarProduto);
routes.get('/produtos_id/:codigoProduto', produtoController.listarPeloCodigo);
routes.post('/produtos_id/:codigoProduto', produtoController.atualizarProduto);
routes.delete('/produtos_id/:codigoProduto', produtoController.removerProduto);
routes.get('/produtos_nome/:nomeProduto', produtoController.listarPeloNome);


//Usuario
routes.post('/usuario', usuarioController.criarUsuario);
routes.post('/autentica', usuarioController.autenticaUsuario);

module.exports = routes;