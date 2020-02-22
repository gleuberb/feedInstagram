const express = require('express');
const multer = require('multer');//PERMITER QUE O EXPRESS LEIA O TIPO DE ARQUIVO MULTIPART FORM (INSOMNIA)
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// routes.get('/', (req, res) =>{ // Aqui é o interceptador de rota (midleware), está com '/' pra quando o usuario digitar http://localhost/3333/, poderia estar com '/home' que ficaria http://localhost/3333/home
//     return res.send(`Olá mundo`);
// });

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;