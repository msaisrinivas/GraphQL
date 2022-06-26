const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { products, categories , reviews } = require("./db");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { Review } = require("./resolvers/Review");
const { Mutation } = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Review,
    Mutation,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("server is ready " + url);
});
