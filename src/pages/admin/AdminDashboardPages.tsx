import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const AdminDashboardPages: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const local: string | null = localStorage.getItem("local");
  useEffect(() => {
    if (!local) {
      window.location.href = "/admin";
    }
  });
  return (
    <>
      <Helmet>
        <title>მთავარი გვერდი - ბავშვთა უფლებების "ცოდნის ცენტრი"</title>
      </Helmet>
    </>
  );
};

export default AdminDashboardPages;
