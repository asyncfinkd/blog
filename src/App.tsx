import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter, Switch } from "react-router-dom";
import { ApplicationContext } from "./context/application/ApplicationContext";
import jwt_decode from "jwt-decode";
import { CookiesProvider } from "react-cookie";
import Routers from "./constants/Routes";

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`graphql error ${message}`);
    });
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const customHeaders = operation.getContext().hasOwnProperty("headers")
    ? operation.getContext().headers
    : {};
  operation.setContext({
    headers: {
      ...customHeaders,
    },
  });
  return forward(operation);
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:3001/graphql",
  }),
  authMiddleware,
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

interface Props {
  access_token?: String;
}

const App: React.FC = () => {
  const [jwtDecode, setJwtDecode] = useState<Props[] | []>([]);
  const local: any = localStorage.getItem("local");
  useEffect(() => {
    if (local) {
      let decoded: any = jwt_decode(local);
      setJwtDecode(decoded);
      console.log(decoded);
    }
  }, [local]);
  return (
    <>
      <CookiesProvider>
        <ApplicationContext.Provider value={{ jwtDecode, setJwtDecode }}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Switch>
                <Routers />
              </Switch>
            </BrowserRouter>
          </ApolloProvider>
        </ApplicationContext.Provider>
      </CookiesProvider>
    </>
  );
};

export default App;
