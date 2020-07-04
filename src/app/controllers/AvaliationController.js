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

    return response.status(200).json(book);

    /* const incrementedLike = await book.increment('number_likes');
    const decrementedDislike = await book.decrement('number_dislikes');

    console.log(book);
    console.log(incrementedLike);
    console.log(decrementedDislike);

    return response.status(200).json({ book, incrementedLike, decrementedDislike }); */
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

