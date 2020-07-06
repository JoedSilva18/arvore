module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'age');

  },

  down: queryInterface => {
    return queryInterface.addColumn('users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
