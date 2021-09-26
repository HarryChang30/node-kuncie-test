const { expect } = require('chai');
const sinon = require('sinon');
const UpdateInventory = require('../../../src/application/Inventory/UpdateInventory');
const InventoryRepository = require('../../../src/infrastructure/repository/InventoryRepository');

describe('Update Inventory', function() {
  let sandbox;

  context('given data updated is founded and the correct one', function() {
    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    const product_id = 1;
    const qty = 5;

    it('Should give the response success and not null given data is correct', async function() {
      sandbox.stub(InventoryRepository, 'updateQty').returns(1);
      const UpdateInventoryData = await UpdateInventory.updateQuantity(product_id, qty);
      expect(UpdateInventoryData).to.be.not.null;
    });

    it('Should call the inventory repository function once', async function() {
      sandbox.stub(InventoryRepository, 'updateQty').returns(1);
      await UpdateInventory.updateQuantity(product_id, qty);
      sinon.assert.calledOnceWithExactly(
        InventoryRepository.updateQty,
        product_id,
        qty
      );
    });
  });
});