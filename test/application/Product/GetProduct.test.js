const { expect } = require('chai');
const sinon = require('sinon');
const GetProduct = require('../../../src/application/Product/GetProduct');
const ProductRepository = require('../../../src/infrastructure/repository/ProductRepository');

describe('GetProduct', function() {
  let sandbox;

  context('given product id is the correct one', function() {
    const ExpectedProductData = {
      id: 1,
      product_name: 'Google Home',
      price: 49.99,
      sku_code: '120P90'
    };
    
    this.beforeEach(function () {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function () {
      sandbox.restore();
    });

    it('should return the data along with the correct information', async function() {
      sandbox.stub(ProductRepository, 'findById').returns(ExpectedProductData);
      const GetProductData = await GetProduct.ById(1);
      expect(GetProductData).to.eq(ExpectedProductData);
    });

    it('should return empty if product is not found', async function() {
      sandbox.stub(ProductRepository, 'findById').returns(null);
      const GetProductData = await GetProduct.ById(1);
      expect(GetProductData).to.not.eq(ExpectedProductData);
    });
  });

  context('given product name is the correct one', function() {
    const ExpectedProductData = {
      id: 1,
      product_name: 'Google Home',
      price: 49.99,
      sku_code: '120P90'
    };

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should return the data along with the correct information', async function() {
      sandbox.stub(ProductRepository, 'findByName').returns(ExpectedProductData);
      const GetProductData = await GetProduct.ByName('Google Home');
      expect(GetProductData).to.eq(ExpectedProductData);
    });
  
    it('should return empty if product is not found', async function() {
      sandbox.stub(ProductRepository, 'findByName').returns(null);
      const GetProductData = await GetProduct.ByName('Google Home');
      expect(GetProductData).to.not.eq(ExpectedProductData);
    });
  });
});