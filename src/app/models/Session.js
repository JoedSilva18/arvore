import Sequelize, { Model } from 'sequelize';

class Session extends Model {
  static init(sequelize) {
    super.init(
      {
        google_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Session;
