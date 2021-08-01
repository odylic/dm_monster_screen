import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCounter,
  incrementByAmount,
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
  const [incrementAmount, setIncrementAmount] = useState("2");
  const resetInput = (e) => {
    e.target.value = "";
  };

  const incrementValue = Number(incrementAmount) || 0;

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
      <input
        value={incrementAmount}
        onFocus={(e) => resetInput(e)}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Add Amount
      </button>
    </div>
  );
}
