import Game from '../models/Game';

class GameController {
  async store(req, res) {
    const game = await Game.create(req.body);

    return res.status(200).json(game);
  }

  async index(req, res) {
    const games = await Game.findAll();

    return res.status(200).json(games);
  }
}

export default new GameController();
