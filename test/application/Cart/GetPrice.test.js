const { expect } = require('chai');
const sinon = require('sinon');
const GetPrice = require('../../../src/application/Cart/GetPrice');
const ProductRepository = require('../../../src/infrastructure/repository/ProductRepository');

describe('Get AccumulatedPrice', function() {
  let sandbox;

  this.beforeEach(function() {
    sandbox = sinon.createSandbox();
  });

  this.afterEach(function() {
    sandbox.restore();
  });

  it('should return the price', async function() {
    const items = ['Google Home'];
    sandbox.stub(ProductRepository, 'findByName').returns({ dataValues: { price: 49.99 }});
    const accumulatedPrice = await GetPrice.accumulatePrice(items);
    expect(accumulatedPrice).to.eq(49.99);
  });
});

describe('Get DiscountPrice', function() {
  let sandbox;

  this.beforeEach(function() {
    sandbox = sinon.createSandbox();
  });

  this.afterEach(function() {
    sandbox.restore();
  });

  it('Should calculated discount price of Google Home', async function() {
    const items = ['Google Home', 'Google Home', 'Google Home'];
    sandbox.stub(ProductRepository, 'findByName').returns({ dataValues: { price: 49.99 }});
    const discountPrice = await GetPrice.discountPrice(items);
    expect(discountPrice).to.eq(49.99);
  });

  it('Should calculated discount price of Alexa Home for same item more than 3', async function() {
    const items = ['Alexa Speaker', 'Alexa Speaker', 'Alexa Speaker'];
    sandbox.stub(ProductRepository, 'findByName').returns({ dataValues: { price: 109.50 }});
    const discountPrice = await GetPrice.discountPrice(items);
    expect(discountPrice).to.eq((10/100) * 109.50 * items.length);
  });

  it('Should calculated discount price of Macbook Pro with free Raspberry Pi B', async function() {
    const items = ['Macbook Pro', 'Raspberry Pi B'];
    sandbox.stub(ProductRepository, 'findByName').returns({ dataValues: { price: 30.00 }});
    const discountPrice = await GetPrice.discountPrice(items);
    expect(discountPrice).to.eq(30.00);
  });
});

describe('Get FinalPrice', function() {
  let sandbox;
  
  this.beforeEach(function() {
    sandbox = sinon.createSandbox();
  });
  
  this.afterEach(function() {
    sandbox.restore();
  });
  
  it('Should calculated final price of 3 Google Home', async function() {
    const items = ['Google Home', 'Google Home', 'Google Home'];
    sandbox.stub(ProductRepository, 'findByName').returns({ dataValues: { price: 49.99 }});
    const finalPrice = await GetPrice.finalPrice(items);
    expect(finalPrice).to.haveOwnProperty('actual_prices');
    expect(finalPrice).to.haveOwnProperty('discount');
    expect(finalPrice).to.haveOwnProperty('final_prices');
    expect(finalPrice.final_prices).to.eq(99.98);
  });

  it('Should calculated final price of 3 Alexa Speaker', async function() {
    const items = ['Alexa Speaker', 'Alexa Speaker', 'Alexa Speaker'];
    sandbox.stub(ProductRepository, 'findByName').returns({ dataValues: { price: 109.50 }});
    const finalPrice = await GetPrice.finalPrice(items);
    expect(finalPrice).to.haveOwnProperty('actual_prices');
    expect(finalPrice).to.haveOwnProperty('discount');
    expect(finalPrice).to.haveOwnProperty('final_prices');
    expect(finalPrice.final_prices).to.eq(295.65);
  });

  it('Should calculated final price of Macbook Pro & Raspberry Pi B', async function() {
    const items = ['Macbook Pro', 'Raspberry Pi B'];
    const finalPrice = await GetPrice.finalPrice(items);
    expect(finalPrice).to.haveOwnProperty('actual_prices');
    expect(finalPrice).to.haveOwnProperty('discount');
    expect(finalPrice).to.haveOwnProperty('final_prices');
    expect(finalPrice.final_prices).to.eq(5399.99);
  });
});