import React, { useState } from "react";

export default function Name() {
  const [name, setName] = useState("Mr. Beans");

  const changeName = () => {
    setName("Welcome, Mr. Beans!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{name}</h2>
      <button onClick={changeName}>Click to Change Name</button>
    </div>
  );
}


