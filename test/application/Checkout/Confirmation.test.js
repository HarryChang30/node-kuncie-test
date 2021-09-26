const { expect } = require('chai');
const sinon = require('sinon');
const CheckoutConfirmation = require('../../../src/application/Checkout/Confirmation');
const CartRepository = require('../../../src/infrastructure/repository/CartRepository');
const InventoryRepository = require('../../../src/infrastructure/repository/InventoryRepository');
const ProductRepository = require('../../../src/infrastructure/repository/ProductRepository');

describe('Confirmation Checkout', function() {
  let sandbox;
  
  context('happy case for confirmation check out', function() {
    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    const cart_id = 1;

    it('should give the response if checkout item is success', async function() {
      sandbox.stub(CartRepository, 'findByPk').returns({
        dataValues: { is_checkout: 0, items: ['Google Home'] }
      });
    
      sandbox.stub(ProductRepository, 'findByName').returns({
        dataValues: { id: 2 }
      });

      sandbox.stub(InventoryRepository, 'findByProductId').returns({
        dataValues: { id: 2, product_id: 2, qty: 10 }
      });

      sandbox.stub(InventoryRepository, 'updateQty').returns(1);
      sandbox.stub(CartRepository, 'update_confirmation_checkout').returns(1);

      const confirmation = await CheckoutConfirmation.confirmation(cart_id);
      expect(confirmation).to.haveOwnProperty('is_checkout');
      expect(confirmation.is_checkout).to.eq(true);
    });
  });

  context('negative case for confirmation check out', function() {
    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    const cart_id = 1;

    it('should throw the error if cart is already checkout', async function() {
      let error;
      sandbox.stub(CartRepository, 'findByPk').returns({
        dataValues: { is_checkout: 1 } 
      });

      try {
        await CheckoutConfirmation.confirmation(cart_id);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.not.null;
      expect(error.message).to.eq('This cart already checkout');
    });

    it('should throw the error if given some item qty is 0', async function() {
      let error;
      sandbox.stub(CartRepository, 'findByPk').returns({
        dataValues: { is_checkout: 0, items: ['Google Home'] }
      });

      sandbox.stub(ProductRepository, 'findByName').returns({
        dataValues: { id: 2 }
      });

      sandbox.stub(InventoryRepository, 'findByProductId').returns({
        dataValues: { id: 2, product_id: 2, qty: 0 }
      });

      try {
        await CheckoutConfirmation.confirmation(cart_id);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.not.null;
      expect(error.message).to.eq('Google Home stock is still empty');

    });
  });
});