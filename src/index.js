const express = require('express');//DEPENDENCIA QUE PERMITE A GENTE LHE DAR COM ROTAS, PARAMETROS E RESPOSTAS PRO NOSSO CLIENTES
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);//DIVIDINDO O SERVIDOR PRA RECEBER TANTO HTML QUANTO WEBSOCKET USANDO A DEPENDENCIA SOCKET.IO QUE PERMITE A ATUALIZAÃO EM TEMPO REAL

mongoose.connect('mongodb+srv://admin:admin@cluster0-ndiee.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next) => {//AQUI EU PERMITO TODOS OS CONTROLLERS A TER ACESSO AO REQ.IO
    req.io = io;

    next();
});

app.use(cors());// PERMITIR QUE TODAS AS URLS ACESSEM ESSE BACKEND, SEM ISSO O REACT NÃO IRIA VER O BACKEND

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads','resized')));// ROTA PARA ACESSAR ARQUIVOS ESTATICOS, QUE SÃO AS IMAGENS FEITA UPLOAD

app.use(require('./routes'));

server.listen(3333);