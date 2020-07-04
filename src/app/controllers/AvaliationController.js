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

    const likes = await Book.findAll({
      attributes: ['number_likes'],
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
      number_likes: likes + 1,
      number_deslikes: dislikes !== 0 ? dislikes - 1 : dislikes,
    });

    return response.status(200).json({ book, dislikes });
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

    const dislikes = await Book.findAll({
      attributes: ['number_deslikes'],
      where: {
        id: book_id,
      }
    });

    await book.update({
      number_likes: likes !== 0 ? likes - 1 : likes,
      number_deslikes: dislikes + 1, 
    });

    return response.status(200).json({ book, likes });
  };

};

export default new AvaliationController();

