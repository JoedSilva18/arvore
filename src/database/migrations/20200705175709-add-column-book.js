module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('books', 'book_url', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('books', 'book_url');
  },
};
