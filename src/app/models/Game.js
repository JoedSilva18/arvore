import Sequelize, { Model } from 'sequelize';

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        image_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Game;
