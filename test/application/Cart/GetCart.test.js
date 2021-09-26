const { expect } = require('chai');
const sinon = require('sinon');
const GetCart = require('../../../src/application/Cart/GetCart');
const CartRepository = require('../../../src/infrastructure/repository/CartRepository');

describe('Get Cart', function() {
  let sandbox;

  context('given user id is the correct one', function() {
    const ExpectedCartData = [
      {
        id: 1,
        user_id: 1,
        items: ['Google Home'],
        actual_prices: 49.99,
        discount: 0,
        final_prices: 49.99
      }
    ];

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should return the correct data if user id is found', async function() {
      sandbox.stub(CartRepository, 'findAll').returns(ExpectedCartData);
      const GetCartData = await GetCart.ByUserId(1);
      expect(GetCartData).to.be.an('array');
      expect(GetCartData[0]).to.haveOwnProperty('id');
      expect(GetCartData[0]).to.haveOwnProperty('user_id');
      expect(GetCartData[0]).to.haveOwnProperty('items');
      expect(GetCartData[0]).to.haveOwnProperty('actual_prices');
      expect(GetCartData[0]).to.haveOwnProperty('discount');
      expect(GetCartData[0]).to.haveOwnProperty('final_prices');
      expect(GetCartData.length).to.not.eq(0);
    });

    it('should return empty data if user id is not found', async function() {
      sandbox.stub(CartRepository, 'findAll').returns([]);
      const GetCartData = await GetCart.ByUserId(2);
      expect(GetCartData).to.be.an('array');
      expect(GetCartData.length).to.eq(0);
    });
  });
});