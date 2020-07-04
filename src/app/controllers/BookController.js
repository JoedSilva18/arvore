import Watson from '../../utils/WatsonML';

class BookController {
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
