const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/terms?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen({ port: 3001 }, () => {
  console.log("server running on port 3001");
});
