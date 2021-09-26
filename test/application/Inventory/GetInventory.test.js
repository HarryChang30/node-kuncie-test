const { expect } = require('chai');
const sinon = require('sinon');
const GetInventory = require('../../../src/application/Inventory/GetInventory');
const InventoryRepository = require('../../../src/infrastructure/repository/InventoryRepository');

describe('Get Inventory', function() {
  let sandbox;

  context('given product id is the correct one', function() {
    const ExpectedInventoryData = {
      product_id: 1,
      qty: 10
    };
    
    this.beforeEach(function () {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function () {
      sandbox.restore();
    });

    it('should return the data along with the correct information', async function() {
      sandbox.stub(InventoryRepository, 'findByProductId').returns(ExpectedInventoryData);
      const GetInventoryData = await GetInventory.ByProductId(1);
      expect(GetInventoryData).to.eq(ExpectedInventoryData);
    });

    it('should return empty if product is not found', async function() {
      sandbox.stub(InventoryRepository, 'findByProductId').returns(null);
      const GetInventoryData = await GetInventory.ByProductId(1);
      expect(GetInventoryData).to.not.eq(ExpectedInventoryData);
    });
  });

  context('Show all inventory', function() {
    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should return the success response along with the data', async function() {
      sandbox.stub(InventoryRepository, 'findAll').returns([{
        dataValues: {
          product_id: 1,
          qty: 10,
          product: {
            dataValues: {
              product_name: 'Google Home',
              price: 49.99,
              sku_code: 'OXKSKA123'
            }
          }
        },
      }]);

      const GetInventoryData = await GetInventory.ShowAll();
      expect(GetInventoryData).to.be.an('array');
      expect(GetInventoryData[0]).to.haveOwnProperty('product_id');
      expect(GetInventoryData[0]).to.haveOwnProperty('qty');
      expect(GetInventoryData[0]).to.haveOwnProperty('product_name');
      expect(GetInventoryData[0]).to.haveOwnProperty('product_price');
      expect(GetInventoryData[0]).to.haveOwnProperty('product_sku_code');
    });
  });
});