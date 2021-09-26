const { expect } = require('chai');
const sinon = require('sinon');
const CreateUser = require('../../../src/application/User/CreateUser');
const UserRepository = require('../../../src/infrastructure/repository/UserRepository');

describe('CreateUser', function() {
  let sandbox;

  context('given data is the correct one', function() {
    const user = {
      name: 'Bobby',
      phone_number: '+628999109192'
    };

    const ExpectedCreateUser = {
      id: 3,
      name: 'Bobby',
      phone_number: '+628999109192'
    };

    this.beforeEach(function() {
      sandbox = sinon.createSandbox();
    });

    this.afterEach(function() {
      sandbox.restore();
    });

    it('should create the user successfully given the data is correct', async function() {
      sandbox.stub(UserRepository, 'create').returns(ExpectedCreateUser);
      const CreateUserData = await CreateUser.create(user);
      expect(CreateUserData).to.eq(ExpectedCreateUser);
    });

    it('should throw error given parameter is not the correct one', async function() {
      let error;
      try {
        await CreateUser.create({ name_test: '1234567' });
      } catch (err) {
        error = err;
      }

      expect(error).to.not.null;
      expect(error.message).to.eq('ValidationError');
    });
  });
});