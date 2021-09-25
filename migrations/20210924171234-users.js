'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.DataTypes.STRING,
      phone_number: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('users');
  }
};
