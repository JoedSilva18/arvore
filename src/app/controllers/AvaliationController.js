/* eslint-disable prettier/prettier */

// Controller para gerenciamento de like e dislike em um livro por um usuário
import Book from '../models/Book';

class AvaliationController {

  async addLike(request, response) {
    const { book_id } = request.params;

    const book = await Book.findOne({
      where: {
        id: book_id,
      },
    });

    /* let [{  number_likes, number_deslikes }] = book;
    number_likes += 1;
    if(number_deslikes !== 0) {
      number_deslikes -= 1;
    } */

    await book.update({
      number_likes: 1,
      number_deslikes: 1,
    });

    return response.send(book);
  };

  async addDislike(request, response) {
    const { book_id } = request.params;

    const book = await Book.findOne({
      where: {
        id: book_id,
      },
    });

    let [{ number_likes, number_deslikes }] = book;
    number_deslikes += 1;
    if(number_likes !== 0) {
      number_likes -= 1;
    };

    await book.update({
      number_likes,
      number_deslikes,
    });

    return response.status(200).json(book);
  };

};

export default new AvaliationController();

