import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Category from '../app/models/Category';
import Book from '../app/models/Book';

const models = [Category, Book];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
