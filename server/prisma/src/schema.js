const typeDefs = `#graphql

  type Form {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    subject: String!
    message: String!

  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
#   type Mutation {
#    formCreate()
#   }
`;