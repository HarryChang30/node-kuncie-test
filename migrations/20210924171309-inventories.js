'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('inventories', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: Sequelize.DataTypes.BIGINT
      },
      qty: {
        type: Sequelize.DataTypes.INTEGER
      }
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('inventories');  
  }
};
