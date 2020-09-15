const express = require('express');
const server = express();
const dotenv = require('dotenv').config();

server.get('', (request, response) = {
  response.json({ hello 'Ruth' });
});

server.get('cursos', (request, response) = {
  response.json({
    Web 'React.JS',
    Mobile 'React Native',
    Datascience 'TensorFlow',
  });
});

server.listen(process.env.PORT);
console.log(`Instacia do servidor iniciado na porta ${process.env.PORT}.`);
