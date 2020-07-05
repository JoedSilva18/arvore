module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'email');

  },

  down: queryInterface => {
    return queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
