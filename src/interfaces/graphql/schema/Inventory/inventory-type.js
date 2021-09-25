const gql = require('graphql-tag');

const InventoryType = gql`
    type InventoryType{
        product_id: Int
        qty: Int
    }

    type Query{
        inventory(product_id:Int):InventoryType
    }

    type Mutation{
        addInventory(product_id:Int!, qty:Int!):InventoryType
        updateQuantity(product_id:Int!, qty:Int!):InventoryType
    }
`;

module.exports = InventoryType;