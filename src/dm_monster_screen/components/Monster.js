import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getId,
  decrementByAmount,
  setAmount,
  deleteMonster,
} from "../store/monsterSlice";

export default function Monster(id) {
  const dispatch = useDispatch();

  const [input, setInput] = useState();

  const [decrementAmount, setDecrementAmount] = useState("");
  const decrementValue = Number(decrementAmount) || 0;

  const resetInput = (e) => {
    e.target.placeholder = "";
  };

  const resetValue = (e) => {
    e.target.value = "";
  };

  const setHp = () => {
    dispatch(getId(id.id));
  };

  return (
    <div className="grid">
      <button
        className="closeMonsterButton"
        onClick={(e) => {
          e.preventDefault();
          dispatch(deleteMonster(id.id));
        }}
      >
        x
      </button>
      <div className="monsterItem">
        <h1>{id.hp}</h1>
        <input
          placeholder="enter monster name"
          onFocus={(e) => resetInput(e)}
        ></input>

        <input
          placeholder="set monster hp"
          onFocus={(e) => {
            resetInput(e);
            resetValue(e);
          }}
          onChange={(e) => {
            dispatch(setAmount({ hp: e.target.value, id: id.id }));
          }}
        ></input>

        <form>
          <input
            type="text"
            value={input}
            onFocus={(e) => resetValue(e)}
            onChange={(e) => {
              setDecrementAmount(e.target.value);
              setInput(e.target.value);
            }}
          ></input>
          <br></br>
          <button
            className="damageButton"
            type="reset"
            disabled={!input}
            onClick={() => {
              dispatch(
                decrementByAmount({ id: id.id, damage: decrementValue })
              );
              setInput("");
            }}
          >
            Set Damage
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
}
