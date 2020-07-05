import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).send(false);
    }
    return res.status(200).send(true);
  }
}

export default new UserController();
