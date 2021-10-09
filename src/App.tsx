import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import GetUsers from "./components/GetUsers";

const errorLink = onError(({graphqlErrors, networkError}: any) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}: any) => {
      alert(`graphql error ${message}`);
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:3001/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const App: React.FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <GetUsers />
      </ApolloProvider>
    </>
  );
}

export default App;