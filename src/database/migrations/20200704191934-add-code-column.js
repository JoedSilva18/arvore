module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('books', 'code', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('books', 'code');
  },
};
