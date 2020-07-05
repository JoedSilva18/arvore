import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        school: Sequelize.STRING,
        google_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
