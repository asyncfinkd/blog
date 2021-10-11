import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ApplicationContext } from "./context/application/ApplicationContext";
import jwt_decode from "jwt-decode";
import { CookiesProvider } from "react-cookie";
import Routers from "./constants/Routes";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  access_token?: String;
}

const client = new QueryClient();

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
        <QueryClientProvider client={client}>
          <ApplicationContext.Provider value={{ jwtDecode, setJwtDecode }}>
            <BrowserRouter>
              <Switch>
                <Routers />
              </Switch>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </ApplicationContext.Provider>
        </QueryClientProvider>
      </CookiesProvider>
    </>
  );
};

export default App;
