import Character from '../models/Character';

class CharacterController {
  async store(req, res) {
    const character = await Character.create(req.body);

    return res.status(200).json(character);
  }

  async index(req, res) {
    const { movie_id } = req.params;

    const characteres = await Character.findAll({
      where: {
        movie_id,
      },
    });

    return res.status(200).json(characteres);
  }
}

export default new CharacterController();
