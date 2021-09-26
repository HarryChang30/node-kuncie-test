const { attributes } = require('structure');

const User = attributes({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  }
})(class User {});

module.exports = User;