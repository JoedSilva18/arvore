/* eslint-disable prettier/prettier */
import Watson from '../../utils/WatsonML';
import Book from '../models/Book';

class BookController {
  async store(req, res) {
    const book = await Book.create(req.body);

    return res.status(200).json(book);
  }

  async show(req, res) {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    return res.status(200).json(book);
  }

  async index(req, res) {
    const { category_id } = req.params;

    const books = await Book.findAll({
      where: {
        category_id,
      },
    });

    return res.status(200).json(books);
  }

  async getAverageTime(req, res) {
    const { book_id } = req.params;

    const { average_time } = await Book.findByPk(book_id);

    return res.status(200).json({ average_time });
  }

  async findBooks(req, res) {
    const { escolaridade, categoria, filmes, personagens, youtubers, jogos } = req.body;
    const combinacoes = [];
    const books = [];
    const booksResult = [];

    filmes.forEach(filme => {
      personagens.forEach(personagem => {
        youtubers.forEach(youtuber => {
          jogos.forEach(jogo => {
            combinacoes.push([filme, personagem, youtuber, jogo]);
          });
        });
      });
    });

    const promises = combinacoes.map(async combinacao => {
      const payload =
        `{"input_data": [{"fields": ["escolaridade", "categoria", "filme", "personagem", "youtube", "jogo"],` +
        `"values": [["${escolaridade}","${categoria}","${combinacao[0]}", "${combinacao[1]}", "${
        combinacao[2]
        }", "${combinacao[3]}"]]}]}`;

      const book_code = await Watson.callWatsonML(payload);
      books.push(book_code);
    });

    await Promise.all(promises);

    const booksFilter = books.filter(function (thisBook, i) {
      return books.indexOf(thisBook) === i;
    });

    const promiseBook = booksFilter.map(async bookCode => {
      const bookResult = await Book.findOne({
        where: {
          code: bookCode,
        },
      });

      booksResult.push(bookResult);
    });

    await Promise.all(promiseBook);

    return res.json(booksResult);
  }
}

export default new BookController();
