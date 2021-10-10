import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/hero/Hero";

const IndexPages: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Hero />
    </>
  );
};

export default IndexPages;
