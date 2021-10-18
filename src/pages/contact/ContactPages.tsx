import React, { useEffect } from "react";
import Contact from "components/contact/Contact";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

const ContactPages: React.FC = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>კონტაქტი - ბავშვთა უფლებების "ცოდნის ცენტრი"</title>
      </Helmet>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Contact />
      </div>
    </>
  );
};

export default ContactPages;
