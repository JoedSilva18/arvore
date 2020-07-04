/* eslint-disable prettier/prettier */

// Controller para gerenciamento de like e dislike em um livro por um usuário
import sequelize from 'sequelize';
import Book from '../models/Book';

class AvaliationController {

  async addLike(request, response) {
    const { book_id } = request.params;

    const trx = await sequelize.transaction();

    try {
      const book = await Book.findAll({
        where: {
          id: book_id
        }
      });

      const incrementedLike = await book.increment('number_likes');
      const decrementedDislike = await book.decrement('number_dislikes');

      await trx.commit();

      console.log(book);
      console.log(incrementedLike);
      console.log(decrementedDislike);

    } catch (error) {
      await trx.rollback();
    }

    return response.status(200).json({ 'Status': 'Ok' });
  };

  async addDislike(request, response) {
    const { book_id } = request.params;

    const trx = await sequelize.transaction();

    try {
      const book = await Book.findAll({
        where: {
          id: book_id
        }
      });

      const incrementedDislike = await book.increment('number_dislikes');
      const decrementedLike = await book.decrement('number_likes');

      await trx.commit();

      console.log(book);
      console.log(incrementedDislike);
      console.log(decrementedLike);

    } catch (error) {
      await trx.rollback();
    }

    return response.json({ 'Status': 'Ok' });
  };

};

export default new AvaliationController();

