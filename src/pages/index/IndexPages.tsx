import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Partners from "../../components/partners/Partners";
// import loadjs from "loadjs";

const IndexPages: React.FC = () => {
  // loadjs
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Hero />
      <Partners />
      <Blog />
      <Contact />
    </>
  );
};

export default IndexPages;
