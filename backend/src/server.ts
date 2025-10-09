import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./graphql/schema";

export const createApolloServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
  });
};
