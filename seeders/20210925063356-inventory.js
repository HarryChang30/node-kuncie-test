'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('inventories', [{
      product_id: 1,
      qty: 10
    }, {
      product_id: 2,
      qty: 5
    }, {
      product_id: 3,
      qty: 10
    }, {
      product_id: 4,
      qty: 2
    }]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('inventories', null, {});
  }
};
