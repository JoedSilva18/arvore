module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('books', 'image_url', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('books', 'image_url');
  },
};
