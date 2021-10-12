import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AboutPages from "../pages/about/AboutPages";
import AdminDashboardPages from "../pages/admin/AdminDashboardPages";
import AdminPages from "../pages/admin/AdminPages";
import IndexPages from "../pages/index/IndexPages";
import PartnersPages from "../pages/partners/PartnersPages";

const Routers = () => {
  const local = localStorage.getItem("local");

  const routes = [
    {
      path: "/",
      ComponentToRender: IndexPages,
      GlobalComponents: true,
    },
    {
      path: "/about",
      ComponentToRender: AboutPages,
      GlobalComponents: true,
    },
    {
      path: "/partners",
      ComponentToRender: PartnersPages,
      GlobalComponents: true,
    },
    {
      path: "/admin",
      ComponentToRender: AdminPages,
      GlobalComponents: false,
    },
    {
      path: "/admin/dashboard",
      ComponentToRender: AdminDashboardPages,
      dynamically: true,
      dynamicallyCondition: local,
      GlobalComponents: false,
    },
  ];

  return (
    <>
      {routes.map((item: any) => {
        const { ComponentToRender } = item;
        return (
          <>
            {item?.dynamically ? (
              <>
                {item?.dynamicallyCondition ? (
                  <>
                    <Route path={item.path} exact>
                      {item.GlobalComponents ? (
                        <>
                          <Header />
                          <ComponentToRender />
                          <Footer />
                        </>
                      ) : (
                        <>
                          <ComponentToRender />
                        </>
                      )}
                    </Route>
                  </>
                ) : (
                  <Route exact>
                    <p>404</p>
                  </Route>
                )}
              </>
            ) : (
              <>
                <Route path={item.path} exact>
                  {item.GlobalComponents ? (
                    <>
                      <Header />
                      <ComponentToRender />
                      <Footer />
                    </>
                  ) : (
                    <>
                      <ComponentToRender />
                    </>
                  )}
                </Route>
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default Routers;