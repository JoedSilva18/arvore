import Scholarity from '../models/Scholarity';

class ScholarityController {
  async store(req, res) {
    const scholarity = await Scholarity.create(req.body);

    return res.status(200).json(scholarity);
  }
}

export default new ScholarityController();
