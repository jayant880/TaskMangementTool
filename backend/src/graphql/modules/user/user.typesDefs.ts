export const userTypesDefs = `#graphql
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
}

type Query {
    login(username: String!, password: String!): User
    users: [User]
}

type Mutation {
    register(username: String!, email: String!, password:String!) : User!
}
`;
