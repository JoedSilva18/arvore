module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'school', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'school');
  },
};
