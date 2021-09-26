'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('inventories', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      qty: {
        type: Sequelize.DataTypes.INTEGER
      },
      product_id: {
        type: Sequelize.DataTypes.BIGINT
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('inventories');  
  }
};
