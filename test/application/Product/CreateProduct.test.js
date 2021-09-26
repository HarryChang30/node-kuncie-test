const { expect } = require('chai');
const sinon = require('sinon');
const CreateProduct = require('../../../src/application/Product/CreateProduct');
const ProductRepository = require('../../../src/infrastructure/repository/ProductRepository');

describe('Create Product', function() {
  let sandbox;

  context('given data is the correct one', function() {
    const product = {
      product_name: 'Macbook Air',
      price: 2999.99,
      sku_code: '90XXKSL'
    };

    const ExpectedProductData = {
      id: 5,
      product_name: 'Macbook Air',
      price: 2999.99,
      sku_code: '90XXKSL'
    };

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should create the product successfully given the data is correct', async function() {
      sandbox.stub(ProductRepository, 'addProduct').returns(ExpectedProductData);
      const CreateProductData = await CreateProduct.create(product);
      expect(CreateProductData).to.eq(ExpectedProductData);
    });

    it('should throw error given parameter is not the correct one', async function() {
      let error;
      try {
        await CreateProduct.create({ name_product: 12312323 });
      } catch (err) {
        error = err;
      }

      expect(error).to.not.null;
      expect(error.name).to.eq('SequelizeValidationError');
    });
  });
});