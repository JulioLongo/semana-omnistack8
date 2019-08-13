const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//express cria um servidor
const server = express();

//conectar com o banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-g7wkv.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());

//escolhe que vai usar tipo json
server.use(express.json());

//usar modulo de outro arquivo
server.use(routes);

//porta para qual servidor vai ouvir
server.listen(3333, function(){
    console.log("servidor rodando na url http://localhost:3333");
});

