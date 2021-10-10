const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  type Me {
    email: String
    _id: ID
  }

  type Admin {
    _id: ID
    fullName: String
    firstName: String
    lastName: String
    email: String
    password: String
    text: String
    access_token: String
    refresh_token: String
  }

  # Queries
  type Query {
    getAllUsers: [User]
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int!, married: Boolean!): User!
    adminIdentification(email: String!, password: String!): Admin
    me: Me
  }
`;

module.exports = { typeDefs };
