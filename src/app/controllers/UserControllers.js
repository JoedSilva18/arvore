import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).send(false);
    }
    return res.status(200).send(true);
  }

  async update(req, res) {
    const { google_id } = req.params;

    try {
      const user = await User.findOne({
        where: {
          google_id,
        },
      });

      await user.update({
        is_completed: true,
      });

      return res.status(200).send(true);
    } catch (err) {
      return res.status(400).send(false);
    }
  }
}

export default new UserController();
