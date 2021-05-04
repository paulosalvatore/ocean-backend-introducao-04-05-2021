const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

const mensagens = ['Essa é a primeira mensagem!', 'Essa é a segunda mensagem!'];

app.get('/mensagens', function (req, res) {
  res.send(mensagens);
});

app.listen(3000);
