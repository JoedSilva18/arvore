import Sequelize, { Model } from 'sequelize';

class Character extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        movie_id: Sequelize.INTEGER,
        image_url: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'characteres',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Movie, {
      foreignKey: 'movie_id',
      as: 'movie',
    });
  }
}

export default Character;
