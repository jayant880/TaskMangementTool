import { createApolloServer } from "./server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = createApolloServer();

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(` Server ready at: ${url}`);
