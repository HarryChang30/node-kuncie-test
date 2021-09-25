'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [{
      product_name: 'Google Home',
      price: 49.99,
      sku_code: '120P90'
    }, {
      product_name: 'Macbook Pro',
      price: 5399.99,
      sku_code: '43N23P'
    }, {
      product_name: 'Alexa Speaker',
      price: 109.50,
      sku_code: 'A304SD'
    }, {
      product_name: 'Raspberry Pi B',
      price: 30.00,
      sku_code: '234234'
    }]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
