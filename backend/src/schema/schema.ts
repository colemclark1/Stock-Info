const { gql } = require('apollo-server');

export const typeDefs = gql`
  type Query {
    User(id: Int!): User
  }

  type Mutation {
      addUser(firstName: String!, lastName: String!, age: Int!, email: String): User
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
    email: String
  }
`;