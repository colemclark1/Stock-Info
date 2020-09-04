import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
const cors = require('cors')

import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/userResolver";


const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, });

  await createConnection();

  const app = express();

  app.use(cors()) 

  const logRequestStart = (req: any, _: any, next: any) => {
    console.info(`${req.method} ${req.originalUrl}`)
    console.info(`Body: ${req.body}`)
    console.info(`Id: ${req.params.id}\n`)
    next()
  }
  app.use(logRequestStart)

  server.applyMiddleware({app});

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
  
};

startServer();