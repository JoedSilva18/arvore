/* eslint-disable prettier/prettier */
import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SmsController from './app/controllers/SmsController';
import BookController from './app/controllers/BookController';
import AvaliationController from './app/controllers/AvaliationController';
import CategoryController from './app/controllers/CategoryController';
import UserBookController from './app/controllers/UserBookController';
import ScholarityController from './app/controllers/ScholarityController';
import MovieController from './app/controllers/MovieController';
import CharacterController from './app/controllers/CharacterController';
import YoutubeChannelController from './app/controllers/YoutubeChannelController';
import GameController from './app/controllers/GameController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Cria um user google
routes.post('/session/:google_id', SessionController.store);

// Cria um usuário
routes.post('/user', UserController.store);

/* Cria uma categoria */
routes.post('/category', CategoryController.store);

// Busca categorias por nível escolar
routes.get('/categories/:schooling_id', CategoryController.index);

/* Salva livros */
routes.post('/book', BookController.store);

/* Buscar livros sugeridos */
routes.post('/books', BookController.findBooks);

/* Buscar livro por id */
routes.get('/book/:id', BookController.show);

/* Buscar livros por categoria */
routes.get('/book/category/:category_id', BookController.index);

/* Dar like no livro */
routes.post('/like/user/:user_id/book/:book_id', AvaliationController.addLike);

/* Dar deslike no livro */
routes.post('/dislike/user/:user_id/book/:book_id', AvaliationController.addDislike);

/* Envio SMS */
routes.post('/sms', SmsController.send);

/* Usuario inicia a leitura */
routes.post('/userbook', UserBookController.store);

/* Armazena pagina atual */
routes.put(
  '/userpage/user/:user_id/book/:book_id/page/:page_number',
  UserBookController.update
);

/* Busca pagina atual */
routes.get('/userpage/user/:user_id/book/:book_id', UserBookController.getCurrentPage);

/* Busca media de tempo de leitura do livro */
routes.get('/averageTime/book/:book_id', BookController.getAverageTime);

// Cria nível escolar
routes.post('/scholarity', ScholarityController.store);

// Adiciona filme
routes.post('/movie', MovieController.store);

// Busca filme por categoria
routes.get('/movies/:category_id', MovieController.index);

// Adiciona personagem
routes.post('/character', CharacterController.store);

// Busca as personagens de um filme
routes.get('/characteres/:movie_id', CharacterController.index);

// Adiciona canal do Youtube
routes.post('/channel', YoutubeChannelController.store);

// Busca canais do Youtube
routes.get('/channels', YoutubeChannelController.index);

// Adiciona jogo
routes.post('/game', GameController.store);

// Busca jogos
routes.get('/games', GameController.index);

export default routes;
