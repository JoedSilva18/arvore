import { Router } from 'express';

const routes = new Router();

/* Buscar livros sugeridos */
routes.get('/books', (req, res) =>
  res.json({ message: 'Passar atributos e buscar livros' })
);

/* Buscar livro por id */
routes.get('/book/book_id/:id', (req, res) =>
  res.json({ message: 'Busca livros' })
);

/* Buscar livros por categoria */
routes.get('/book/category/:category', (req, res) =>
  res.json({ message: 'Busca livros' })
);

/* Dar like no livro */
routes.post('/like/user/:user_id/book/:book_id', (req, res) =>
  res.json({ message: 'Like no livro' })
);

/* Dar deslike no livro */
routes.post('/deslike/user/:user_id/book/:book_id', (req, res) =>
  res.json({ message: 'Deslike no livro' })
);

/* Envio SMS */
routes.post('/sms', (req, res) =>
  res.json({ message: 'Enviar numero de destino e a mensagem no corpo' })
);

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
