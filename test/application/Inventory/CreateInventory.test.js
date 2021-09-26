const { expect } = require('chai');
const sinon = require('sinon');
const CreateInventory = require('../../../src/application/Inventory/CreateInventory');
const InventoryRepository = require('../../../src/infrastructure/repository/InventoryRepository');

describe('Create Inventory', function() {
  let sandbox;

  context('given data is the correct one', function() {
    const inventory = {
      product_id: 1,
      qty: 10
    };

    const ExpectedInventoryData = {
      id: 5,
      product_id: 1,
      qty: 10
    };

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should create the product successfully given the data is correct', async function() {
      sandbox.stub(InventoryRepository, 'add').returns(ExpectedInventoryData);
      const CreateInventoryData = await CreateInventory.create(inventory);
      expect(CreateInventoryData).to.eq(ExpectedInventoryData);
    });

    it('should throw error given parameter is not the correct one', async function() {
      let error;
      try {
        await CreateInventory.create({ name_product: 12312323 });
      } catch (err) {
        error = err;
      }

      expect(error).to.not.null;
      expect(error.name).to.eq('SequelizeValidationError');
    });
  });
});