const gql = require('graphql-tag');

const ProductType = gql`
    type ProductType{
        product_name: String
        price: Float
        sku_code: String
    }

    type Query{
        product(id:ID):ProductType
    }

    type Mutation{
        addProduct(product_name:String!, price:Float!, sku_code:String!):ProductType
    }
`;

module.exports = ProductType;