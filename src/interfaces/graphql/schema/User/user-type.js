const gql = require('graphql-tag');

const UserType = gql`
    type UserType{
        id:ID
        name:String
        phone_number:String
    }

    type Query{
        user(id:ID):UserType
    }

    type Mutation{
        addUser(name:String!, phone_number:String!):UserType
    }
`;

module.exports = UserType;