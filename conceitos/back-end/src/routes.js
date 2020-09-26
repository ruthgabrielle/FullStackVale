const express = require('express');
const routes = express.Router();
const musculacaoController = require('./Controllers/musculacao')

//req -> requisição do cliente
//res -> resposta do clienete

routes.get('/', function (req, res){
    res.send(" Bem vindos ao meu servidorrr" );
  });
  
 routes.get('/cursos', (req, res)=>{
    res.json({
      "Web": "React NodeJS",
      "Mobile": "React Native",
      "ML": "DataSciente"
    });
  });

  routes.post('/cursos', (req, resp)=> {
    const response = req.body;
    res.json(response);
  });

  routes.post('/alunos', (req, res) => {
    const response = req.body;
    res.status(200).send();
    console.log(`Bem vindo ${response.nome}`);
  });

  routes.post('/prog/:nome', (req,res)=>{
        const response = req.params.nome;
        res.send(response);
  });

  routes.post('/diretoria',(req, res) =>{
      const nome = req.query.nome
      const idade = req.query.idade
      const sexo = req.query.sexo
     // res.send(nome + ' ' + idade + '' + sexo);

      res.send(`${nome} - ${idade} - ${sexo}`)
  });

  routes.post('/matricula', musculacaoController.planoExercicios);

  module.exports = routes;