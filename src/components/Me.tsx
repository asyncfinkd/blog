import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ME_QUERY } from "../api/Queries";
import { useCookies } from "react-cookie";

const Me: React.FC = () => {
  //   const { error, data, loading } = useQuery(ME_QUERY);
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [cookiesForRefreshToken, setCookieForRefreshToken] = useCookies([
    "refresh_token",
  ]);
  const [MeData, { data, loading }] = useMutation(ME_QUERY, {
    // refetchQueries: [{query}]
    context: {
      headers: {
        refresh_token: JSON.stringify(cookiesForRefreshToken),
        access_token: localStorage.getItem("local"),
      },
    },
  });
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <>
      <button
        onClick={() => {
          MeData();
        }}
      >
        test
      </button>
    </>
  );
};

export default Me;
