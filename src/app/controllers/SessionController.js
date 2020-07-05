import Session from '../models/Session';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { google_id } = req.params;

    const session = await Session.create({
      google_id,
    });

    if (!session) {
      return res.status(400).json({ message: 'User does not exists' });
    }

    const user = await User.findOne({
      where: {
        google_id,
      },
    });

    if (!user) {
      return res.status(400).json({ message: 'User does not exists' });
    }

    return res.status(200).json(user);
  }
}

export default new SessionController();
