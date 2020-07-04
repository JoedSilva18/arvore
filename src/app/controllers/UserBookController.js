import UserBook from '../models/UserBook';

class UserBookController {
  async store(req, res) {
    const userBook = await UserBook.create(req.body);

    return res.status(200).json(userBook);
  }

  async getCurrentPage(req, res) {
    const { user_id, book_id } = req.params;

    const { current_page } = await UserBook.findOne({
      where: {
        user_id,
        book_id,
      },
    });

    return res.status(200).json({
      current_page,
    });
  }

  async update(req, res) {
    const { user_id, book_id, page_number } = req.params;

    const userBook = await UserBook.findOne({
      where: {
        user_id,
        book_id,
      },
    });

    await userBook.update({
      current_page: page_number,
    });

    return res.status(200).json(userBook);
  }
}

export default new UserBookController();
