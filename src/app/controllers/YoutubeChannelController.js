import YoutubeChannel from '../models/YoutubeChannel';

class YoutubeChannelController {
  async store(req, res) {
    const youtubeChannel = await YoutubeChannel.create(req.body);

    return res.status(200).json(youtubeChannel);
  }

  async index(req, res) {
    const channels = await YoutubeChannel.findAll();

    return res.status(200).json(channels);
  }
}

export default new YoutubeChannelController();
