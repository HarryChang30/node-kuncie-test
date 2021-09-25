// TODO: Change this into the repository
const db = require('../../../../infrastructure/models/db');

const UserResolver = {
  Query: {
    user: (parent, args) => {
      return db.users.findByPk(args.id);
    }
  },
  Mutation: {
    addUser: (parent, args) => {
      return db.users.create({
        name: args.name,
        phone_number: args.phone_number
      });
    }
  }
};

module.exports = UserResolver;