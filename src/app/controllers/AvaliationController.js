/* eslint-disable prettier/prettier */

// Controller para gerenciamento de like e dislike em um livro por um usuário
import Book from '../models/Book';

class AvaliationController {

  async addLike(request, response) {
    const { book_id } = request.params;

    const book = await Book.findAll({
      where: {
        id: book_id
      }
    });

    let [{  number_likes, number_deslikes }] = book;
    number_likes += 1;
    if(number_deslikes !== 0) {
      number_deslikes -= 1;
    }

    await book.update({
      number_likes,
      number_deslikes
    })

    return response.status(200).json(book);
  };

  async addDislike(request, response) {
    const { book_id } = request.params;

    const book = await Book.findAll({
      where: {
        id: book_id
      }
    });

    const incrementedDislike = await book.increment('number_dislikes');
    const decrementedLike = await book.decrement('number_likes');

    console.log(book);
    console.log(incrementedDislike);
    console.log(decrementedLike);

    return response.json({ book, incrementedDislike, decrementedLike });
  };

};

export default new AvaliationController();

