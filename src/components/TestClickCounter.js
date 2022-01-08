import React, { useState, useEffect } from "react";

export const TestClickCounter = (props) => {
  const [num, setNum] = useState(0);
  function addNum() {
    setNum((num) => num + 1);
  }
  return (
    <div style={{textAlign: "center", color:"rebeccapurple"}}>
      <h3>TestClickCounter</h3>
      <button onClick={addNum}>Click here to add 1</button>
      <br/><br/>
      <h1>{num}</h1>
    </div>
  );
};
