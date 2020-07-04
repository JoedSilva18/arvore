import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        schooling_id: Sequelize.STRING,
        image_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.schooling, {
      foreignKey: 'schooling_id',
      as: 'schooling',
    });
  }
}

export default Category;
