const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    getResponse(login: String!): GetResponse
  }
  type GetResponse {
    login: String
    html_url: String
    name: String
    company: String
    location: String
  }
`;