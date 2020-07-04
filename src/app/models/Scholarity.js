import Sequelize, { Model } from 'sequelize';

class Scholarity extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'schooling',
        freezeTableName: true,
      }
    );

    return this;
  }
}

export default Scholarity;
