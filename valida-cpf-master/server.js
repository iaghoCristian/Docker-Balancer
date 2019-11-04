'use strict';

const express = require('express');
const validarCpf = require('validar-cpf');

// Constants
const PORT = 5000;

// App
const app = express();
const name = process.env.name || "Container 1"

app.get('/', (req, res) => {
    res.send('Hello world from ' + req.connection.localAddress + ' ' + req.connection.localPort + name + '.\n');
});

app.get('/validar/:cpf', (req, res) => {
    var cpf = req.params.cpf;
    res.send(validarCpf(cpf)+'\n');
});
  
app.listen(PORT);
console.log(`Running listening on port ${PORT}`);
