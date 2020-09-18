const mongoose = require('mongoose');
const produto = mongoose.model('Produto');


module.exports = { 
   async cadastrarProduto(req, res){
    const payload = req.body;
    const response = await produto.create(payload);
    res.json(response);
    },
    async listarProdutos(req, res){
        const {page} = req.query;
        const response = await produto.paginate({},{page, limit : 10});
        res.json(response);
    },
    async listarPeloCodigo(req, res){
        //const codigoProduto = req.params.codigoProduto;
        const response = await produto.findById(req.params.codigoProduto);
        res.json(response);
    },
    async atualizarProduto(req, res){
        const codigoProduto = req.params.codigoProduto;
        const produtoAtualizado = req.body;
        const response = await produto.findByIdAndUpdate(codigoProduto, produtoAtualizado, {new : true});
        res.json(response);
    },
    async removerProduto(req, res){
        const codigoProduto = req.params.codigoProduto;
        const response = await produto.findByIdAndRemove(codigoProduto);
        res.json(response);
    },
    async listarPeloNome(req, res){
        const nomeProduto = req.params.nomeProduto;
        const response = await produto.findOne({"descricao": nomeProduto});
        res.json(response);
    }

}