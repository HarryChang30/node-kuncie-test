'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
        type: Sequelize.DataTypes.STRING
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL(16, 2)
      },
      sku_code: {
        type: Sequelize.DataTypes.STRING
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('products');
  }
};
