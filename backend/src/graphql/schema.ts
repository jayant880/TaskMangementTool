import { userResolvers } from "./modules/user/user.resolvers";
import { userTypesDefs } from "./modules/user/user.typesDefs";

export const typeDefs = [userTypesDefs];
export const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
