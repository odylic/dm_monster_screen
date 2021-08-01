import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCounter,
  decrementByAmount,
  setAmount,
} from "../store/counterSlice";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

export default function counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);
  const [decrementAmount, setDecrementAmount] = useState("");
  const resetInput = (e) => {
    e.target.value = "";
  };

  const decrementValue = Number(decrementAmount) || 0;

  return (
    <div className="App">
      <header className="App-header">
        Redux ToolKit
        <h1>{count} </h1>
        <div style={containerStyle}>
          <button
            type="button"
            onClick={() => dispatch(decrement())}
            style={buttonStyle}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => dispatch(increment())}
            style={buttonStyle}
          >
            +
          </button>
        </div>
      </header>
      Set Total Hp
      <br></br>
      <input onChange={(e) => dispatch(setAmount(Number(e.target.value)))} />
      <br></br>
      <input
        value={decrementAmount}
        onFocus={(e) => resetInput(e)}
        onChange={(e) => setDecrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(decrementByAmount(decrementValue))}>
        Set Damage
      </button>
    </div>
  );
}
