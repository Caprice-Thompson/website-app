import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
import { Query } from './server/prisma/src/resolvers/Query';
import context from 'react-bootstrap/esm/AccordionContext';

const prisma = new PrismaClient();


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
    },
  
  context: {prisma}
});
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);