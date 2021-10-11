import React from "react";
import Partners from "../../components/partners/Partners";

const PartnersPages: React.FC = () => {
  return (
    <>
      <Partners
        props={{ height: "600px", display: "flex", alignItems: "center" }}
      />
    </>
  );
};

export default PartnersPages;
