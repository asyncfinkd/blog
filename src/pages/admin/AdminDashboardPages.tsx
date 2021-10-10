import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AdminDashboardPages: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <p>Hello</p>
    </>
  );
};

export default AdminDashboardPages;
