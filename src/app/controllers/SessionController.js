import Session from '../models/Session';

class SessionController {
  async store(req, res) {
    const { google_id } = req.params;

    const session = await Session.create({
      google_id,
    });

    if (!session) {
      return res.status(400).send(false);
    }

    return res.status(200).send(true);
  }
}

export default new SessionController();
