/* eslint-disable prettier/prettier */
import { Router } from 'express';

import SmsController from './app/controllers/SmsController';
import BookController from './app/controllers/BookController';
import AvaliationController from './app/controllers/AvaliationController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

/* Cria uma categoria */
routes.post('/category', CategoryController.store);

/* Salva livros */
routes.post('/book', BookController.store);

/* Buscar livros sugeridos */
routes.post('/books', BookController.findBooks);

/* Buscar livro por id */
routes.get('/book/book_id/:id', BookController.show);

/* Buscar livros por categoria */
routes.get('/book/category/:category_id', BookController.index);

/* Dar like no livro */
routes.post('/like/user/:user_id/book/:book_id', AvaliationController.addLike);

/* Dar deslike no livro */
routes.post('/dislike/user/:user_id/book/:book_id', AvaliationController.addDislike);

/* Envio SMS */
routes.post('/sms', SmsController.send);

/* Armazena pagina atual */
routes.put(
  '/userpage/user/:user_id/book/:book_id/page/:page_number',
  (req, res) => res.json({ message: 'Armazena pagina conforme usuario le' })
);

/* Busca pagina atual */
routes.get('/userpage/user/:user_id/book/:book_id', (req, res) =>
  res.json({ message: 'Busca pagina atual do livro em questao' })
);

/* Busca media de tempo de leitura do livro */
routes.get('/mean/user/:user_id/book/:book_id', (req, res) =>
  res.json({ message: 'busca tempo medio de leitura' })
);

export default routes;
