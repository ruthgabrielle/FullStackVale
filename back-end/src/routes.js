const express = require('express');
const { req } = require('express');
const routes = express.Router();

routes.get('/', function (req, res){
    res.send(" Bem vindos ao meu servidorrr" );
  });
  
 routes.get('/cursos', function (req, resp){
    res.json({
      "Web": "React NodeJS",
      "Mobile": "React Native",
      "ML": "DataSciente"
    });
  });