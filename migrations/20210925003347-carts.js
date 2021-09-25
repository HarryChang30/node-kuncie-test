'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('carts', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.DataTypes.BIGINT
      },
      items: {
        type: Sequelize.DataTypes.JSON
      },
      actual_prices: {
        type: Sequelize.DataTypes.DECIMAL(16, 2)
      },
      discount: {
        type: Sequelize.DataTypes.DECIMAL(16, 2)
      },
      final_prices: {
        type: Sequelize.DataTypes.DECIMAL(16, 2)
      },
      is_checkout: {
        type: Sequelize.DataTypes.BOOLEAN
      }
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('carts');
  }
};
