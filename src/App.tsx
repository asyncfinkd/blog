import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ApplicationContext } from "./context/application/ApplicationContext";
import jwt_decode from "jwt-decode";
import { CookiesProvider } from "react-cookie";
import Routers from "./constants/Routes";

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
          <BrowserRouter>
            <Switch>
              <Routers />
            </Switch>
          </BrowserRouter>
        </ApplicationContext.Provider>
      </CookiesProvider>
    </>
  );
};

export default App;
