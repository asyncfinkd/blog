import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ME_QUERY } from "../api/Queries";

const Me: React.FC = () => {
  const [MeData, { data, loading }] = useMutation(ME_QUERY, {
    // refetchQueries: [{query}]
    context: {
      headers: {
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
