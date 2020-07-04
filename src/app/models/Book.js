import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        image_url: Sequelize.STRING,
        number_pages: Sequelize.NUMBER,
        author: Sequelize.STRING,
        number_likes: Sequelize.NUMBER,
        number_deslikes: Sequelize.NUMBER,
        average_time: Sequelize.NUMBER,
        category_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Book;
