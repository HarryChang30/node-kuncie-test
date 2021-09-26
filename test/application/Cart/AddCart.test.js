const { expect } = require('chai');
const sinon = require('sinon');
const AddCart = require('../../../src/application/Cart/AddCart');
const CartRepository = require('../../../src/infrastructure/repository/CartRepository');

describe('Add Cart', function() {
  let sandbox;

  context('given data is the correct one', function() {
    const cart = {
      user_id : 1,
      items: ['Google Home', 'Google Home'],
      actual_prices: 99.98,
      discount: 0,
      final_prices: 99.98
    };

    const ExpectedCartData = {
      id: 1,
      user_id: 1,
      items: ['Google Home', 'Google Home'],
      actual_prices: 99.98,
      discount: 0,
      final_prices: 99.98,
      is_checkout: false
    };

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should create the cart successfully with default is_checkout false first', async function() {
      sandbox.stub(CartRepository, 'create').returns(ExpectedCartData);
      const CreateCartData = await AddCart.Create(cart);
      expect(CreateCartData).to.eq(ExpectedCartData);
    });

    it('should throw error when param is not send correctly', async function() {
      let error;
      const wrongCartData = {
        user_id : 1,
        items: ['Google Home', 'Google Home'],
        actual_price: 99.98,
        discount: 0,
        final_price: 99.98
      };
      
      try {
        await AddCart.Create(wrongCartData);
      } catch (err) {
        error = err;
      }

      expect(error).to.not.null;
    });
  });
});