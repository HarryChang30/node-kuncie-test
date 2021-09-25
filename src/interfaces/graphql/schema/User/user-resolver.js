const CreateUser = require('../../../../application/User/CreateUser');
const GetUser = require('../../../../application/User/GetUser');

const UserResolver = {
  Query: {
    user: (parent, args) => {
      return GetUser.ById(args.id);
    }
  },
  Mutation: {
    addUser: (parent, args) => {
      const user = { 
        name: args.name,
        phone_number: args.phone_number
      };
      return CreateUser.create(user);
    }
  }
};

module.exports = UserResolver;