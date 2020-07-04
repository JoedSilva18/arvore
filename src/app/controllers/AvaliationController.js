/* eslint-disable prettier/prettier */

// Controller para gerenciamento de like e dislike em um livro por um usuário
import sequelize from 'sequelize';

const database = require('../../database/index'); // Verificar como importar a tabela Books depois 

class AvaliationController {

    async addLike(request, response) {
        const bookID = request.params;

        const trx = await sequelize.transaction();

        try {
            const book = await database.findAll({
                where: {
                    id: bookID
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

        return response.json({'Status': 'Ok'});
    };

    async addDislike(request, response) {
        const bookID = request.params;

        const trx = await sequelize.transaction();

        try {
            const book = await database.findAll({
                where: {
                    id: bookID
                }
            });

            const incrementedDislike = await book.increment('number_dislikes');
            const decrementedLike = await book.decrement('number_likes');

            await trx.commit();

            console.log(book);
            console.log(incrementedDislike);
            console.log(decrementedDislike);

        } catch (error) {
            await trx.rollback();
        }

        return response.json({'Status': 'Ok'});
    };  

};

module.exports = AvaliationController;

