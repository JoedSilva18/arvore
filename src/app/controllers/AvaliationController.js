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

    const [{ number_likes }] = await Book.findAll({
      attributes: ['number_likes'],
      where: {
        id: book_id,
      },
    });

    const [{ number_deslikes }] = await Book.findAll({
      attributes: ['number_deslikes'],
      where: {
        id: book_id,
      }
    });

    await book.update({
      number_likes: number_likes + 1,
      number_deslikes: number_deslikes !== 0 ? number_deslikes - 1 : number_deslikes,
    });

    return response.status(200).json({ book, number_deslikes });
  };

  async addDislike(request, response) {
    const { book_id } = request.params;

    const book = await Book.findOne({
      where: {
        id: book_id,
      },
    });

    const [{ number_likes }] = await Book.findAll({
      attributes: ['number_likes'],
      where: {
        id: book_id,
      },
    });

    const [{ number_deslikes }] = await Book.findAll({
      attributes: ['number_deslikes'],
      where: {
        id: book_id,
      }
    });

    await book.update({
      number_likes: number_likes !== 0 ? number_likes - 1 : number_likes,
      number_deslikes: number_deslikes + 1, 
    });

    return response.status(200).json({ book, number_likes });
  };

};

export default new AvaliationController();

