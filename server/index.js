const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { verify } = require("jsonwebtoken");
const env = require("./env.json");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  const app = express();
  app.use(cookieParser());

  await server.start();

  app.use((req, _, next) => {
    let accessToken = req.headers["access_token"];
    try {
      const data = verify(accessToken, env.ACCESS_TOKEN);
      req.email = data.email;
    } catch {}
    next();
  });

  server.applyMiddleware({ app });

  app.listen({ port: 3001 }, () => {
    console.log("server running on port 3001");
  });
}

mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/terms?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

startServer();
