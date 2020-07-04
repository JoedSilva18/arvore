import Sequelize, { Model } from 'sequelize';

class UserBook extends Model {
  static init(sequelize) {
    super.init(
      {
        current_page: Sequelize.INTEGER,
        completed: Sequelize.BOOLEAN,
        user_id: Sequelize.INTEGER,
        book_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: 'user_books',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });

    this.belongsTo(models.Book, {
      foreignKey: 'book_id',
      as: 'book',
    });
  }
}

export default UserBook;
