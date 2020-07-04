/* eslint-disable prettier/prettier */

// Controller para gerenciamento de like e dislike em um livro por um usuário
import sequelize from 'sequelize';
import Book from '../models/Book';

class AvaliationController {

  async addLike(request, response) {
    const { book_id } = request.params;

    const book = await Book.findOne({
      where: {
        id: book_id,
      },
    });

    const dislikes = await Book.findAll({
      attributes: ['number_deslikes'],
      where: {
        id: book_id,
      }
    });

    await book.update({
      number_likes: sequelize.literal('number_likes + 1'),
      number_deslikes: dislikes !== 0 ? sequelize.literal('number_deslikes - 1') : dislikes,
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

    const likes = await Book.findAll({
      attributes: ['number_likes'],
      where: {
        id: book_id,
      },
    });

    await book.update({
      number_likes: likes !== 0 ? sequelize.literal('number_likes - 1') : likes,
      number_deslikes: sequelize.literal('number_deslikes + 1'), 
    });

    return response.status(200).json(book);
  };

};

export default new AvaliationController();

