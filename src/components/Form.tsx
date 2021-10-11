import React, { useState } from "react";

const Form: React.FC = () => {
  const [name, setName] = useState("Elon");
  const [age, setAge] = useState(45);
  const [married, setMarried] = useState(true);

  return (
    <>
      <button>Add user</button>
    </>
  );
};

export default Form;
