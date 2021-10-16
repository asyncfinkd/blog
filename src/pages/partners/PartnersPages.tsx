import React from "react";
import { Helmet } from "react-helmet";
import Partners from "../../components/partners/Partners";

const PartnersPages: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>პარტნიორები - ბავშვთა უფლებების "ცოდნის ცენტრი"</title>
      </Helmet>
      <Partners
        props={{ height: "600px", display: "flex", alignItems: "center" }}
      />
    </>
  );
};

export default PartnersPages;
