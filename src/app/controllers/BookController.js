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
    const { historias, filmes, personagens, youtubers, jogos } = req.body;
    const combinacoes = [];
    const livros = [];

    filmes.forEach(filme => {
      personagens.forEach(personagem => {
        youtubers.forEach(youtuber => {
          jogos.forEach(jogo => {
            combinacoes.push([historias, filme, personagem, youtuber, jogo]);
          });
        });
      });
    });

    const promises = combinacoes.map(async combinacao => {
      const payload =
        `{"input_data": [{"fields": ["historias", " filmes", " personagens", " youtubers", " jogos"],` +
        `"values": [["${historias}", "${combinacao[0]}", "${combinacao[1]}", "${
          combinacao[2]
        }", "${combinacao[3]}"]]}]}`;

      const livro = await Watson.callWatsonML(payload);
      livros.push(livro);
    });

    await Promise.all(promises);

    return res.json({ resposta: livros });
  }
}

export default new BookController();
