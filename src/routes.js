/* eslint-disable prettier/prettier */
import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SmsController from './app/controllers/SmsController';
import BookController from './app/controllers/BookController';
import AvaliationController from './app/controllers/AvaliationController';
import CategoryController from './app/controllers/CategoryController';
import UserBookController from './app/controllers/UserBookController';
import ScholarityController from './app/controllers/ScholarityController';

const routes = new Router();

routes.post('/user', UserController.store);

/* Cria uma categoria */
routes.post('/category', CategoryController.store);

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

routes.post('/scholarity', ScholarityController.store);

export default routes;
