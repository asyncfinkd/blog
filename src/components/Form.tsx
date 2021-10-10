import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../api/Mutation";
import { useMutation } from "@apollo/client";

const Form: React.FC = () => {
  const [name, setName] = useState("Elon");
  const [age, setAge] = useState(45);
  const [married, setMarried] = useState(true);

  const [createUser, { error, loading, data }] =
    useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        name: name,
        age: age,
        married: married,
      },
    });
  };
  return (
    <>
      <button onClick={() => addUser()}>Add user</button>
    </>
  );
};

export default Form;
