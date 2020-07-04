import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    const category = await Category.create(req.body);

    return res.status(200).json(category);
  }

  async index(req, res) {
    const { schooling_id } = req.params;

    const categories = await Category.findAll({
      where: {
        schooling_id,
      },
    });

    return res.status(200).json(categories);
  }
}

export default new CategoryController();
