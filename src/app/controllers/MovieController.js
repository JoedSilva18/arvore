import Movie from '../models/Movie';

class MovieController {
  async store(req, res) {
    const movie = await Movie.create(req.body);

    return res.status(200).json(movie);
  }

  async index(req, res) {
    const { category_id } = req.params;

    const movies = await Movie.findAll({
      where: {
        category_id,
      },
    });

    return res.status(200).json(movies);
  }
}

export default new MovieController();
