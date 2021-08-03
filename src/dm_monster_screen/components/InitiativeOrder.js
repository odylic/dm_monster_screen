import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInitiativeOrder,
  addToInitiativeOrder,
  sortInitiativeOrder,
} from "../store/monsterSlice";

export default function InitiativeOrder() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");

  const resetInput = (e) => {
    e.target.placeholder = "";
  };

  const resetValue = (e) => {
    e.target.value = "";
  };

  const initiativeOrder = useSelector(selectInitiativeOrder);

  return (
    <div className="initiativeContainer">
      <h3>Initiative Order</h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(sortInitiativeOrder());
        }}
      >
        Sort
      </button>
      <form>
        <input
          placeholder="enter name"
          value={name}
          onFocus={(e) => {
            resetInput(e);
            resetValue(e);
          }}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <input
          placeholder="enter initiative"
          value={initiative}
          onFocus={(e) => {
            resetInput(e);
            resetValue(e);
          }}
          onChange={(e) => setInitiative(e.target.value)}
        ></input>
        <br></br>
        <button
          disabled={!name || !initiative}
          onClick={() => {
            dispatch(
              addToInitiativeOrder({ name: name, initiative: initiative })
            );
            setName("");
            setInitiative("");
          }}
          type="reset"
        >
          Enter
        </button>
      </form>
      <div className="initiativeOrderList">
        {initiativeOrder.map((item, index) => (
          <div key={index}>
            <span>
              {" "}
              {item.name} {item.initiative}{" "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
