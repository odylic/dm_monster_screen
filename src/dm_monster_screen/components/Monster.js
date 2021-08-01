import React, { useState } from "react";

export default function Monster(id) {
  const [input, setInput] = useState("");

  const resetInput = (e) => {
    e.target.placeholder = "";
  };

  return (
    <div>
      <input placeholder="enter monster name" onFocus={(e) => resetInput(e)}></input>
      <br></br>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <br></br>
      <button onClick={(e) => console.log(id)}>Test</button>

      <br></br>
    </div>
  );
}
