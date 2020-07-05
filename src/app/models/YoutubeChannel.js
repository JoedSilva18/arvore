import Sequelize, { Model } from 'sequelize';

class YoutubeChannel extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        image_url: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'youtube_channels',
      }
    );

    return this;
  }
}

export default YoutubeChannel;
