const { expect } = require('chai');
const sinon = require('sinon');
const GetUser = require('../../../src/application/User/GetUser');
const UserRepository = require('../../../src/infrastructure/repository/UserRepository');

describe('GetUser', function() {
  let sandbox;

  context('given data is the correct one', function() {
    const ExpectedUserData = {
      id: 1,
      name: 'Harry Wijaya',
      phone_number: '+628445000123'
    };

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should return the data along with the information', async function() {
      sandbox.stub(UserRepository, 'findById').returns(ExpectedUserData);
      const GetUserData = await GetUser.ById(1);
      expect(GetUserData).to.eq(ExpectedUserData);
    });

    it('should return empty if user id is not found', async function() {
      sandbox.stub(UserRepository, 'findById').returns(null);
      const GetUserData = await GetUser.ById(1);
      expect(GetUserData).to.not.eq(ExpectedUserData);
    });
  });
});