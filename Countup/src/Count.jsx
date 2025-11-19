import React, { useState } from "react";

function Count() {
  // State to store the count value
  const [count, setCount] = useState(0);

  // Increase count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrease count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Reset count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement} style={{ margin: "5px" }}>
        Count Up
      </button>

      <button onClick={handleDecrement} style={{ margin: "5px" }}>
        Count Down
      </button>

      <button onClick={handleReset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}

export default Count;
