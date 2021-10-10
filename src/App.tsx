import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/IndexPages";
import AdminPages from "./pages/admin/AdminPages";
import { ApplicationContext } from "./context/application/ApplicationContext";

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

interface Props {
  firstName?: String;
  lastName?: String;
  email?: String;
  fullName?: String;
}

const App: React.FC = () => {
  const [jwtDecode, setJwtDecode] = useState<Props[] | []>([]);
  return (
    <>
      <ApplicationContext.Provider value={{}}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={IndexPages} />
              <Route path="/admin" exact component={AdminPages} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
