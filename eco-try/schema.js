const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    sai: [String]
    age: Int
    score: Float
    crazy: [Boolean]
    products(filter: filterForProducts): [Product!]!
    product(id: ID): Product!
    categories: [Category!]!
    category(id: ID): Category
    reviews: [Review!]!
  }

  type Mutation {
    addCategory(input: addToCategory): Category!
    addProduct(input: addToProduct): Product!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryType: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
    productRev: Product
  }

  input filterForProducts{
    onSale: Boolean
    avgRating: Int
  }

  input addToCategory{
    name: String!
  }

  input addToProduct {
    name: String!
    description: String!
    image: String!
    quatity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }
`;
