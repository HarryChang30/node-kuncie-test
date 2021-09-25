const db = require('../../../../infrastructure/models/db');

const UserResolver = {
  Query: {
    user: (parent, args) => {
      return db.users.findByPk(args.id);
    }
  },
  Mutation: {
    addUser: (parent, args) => {
      return args.name;
    }
  }
};

module.exports = UserResolver;