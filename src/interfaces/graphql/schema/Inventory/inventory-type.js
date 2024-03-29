const gql = require('graphql-tag');

const InventoryType = gql`
    type InventoryType{
        product_id: Int
        qty: Int
    }

    type InventoryWithProductType{
        product_id: Int
        product_name: String
        product_price: Float
        product_sku_code: String
        qty: Int
    }

    type Query{
        inventory(product_id:Int):InventoryType
        showInventory:[InventoryWithProductType]
    }

    type Mutation{
        addInventory(product_id:Int!, qty:Int!):InventoryType
        updateQuantity(product_id:Int!, qty:Int!):String
    }
`;

module.exports = InventoryType;