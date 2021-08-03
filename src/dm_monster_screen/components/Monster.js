import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getId,
  decrementByAmount,
  incrementByAmount,
  setAmount,
  deleteMonster,
} from "../store/monsterSlice";

export default function Monster(id) {
  const dispatch = useDispatch();

  const [input, setInput] = useState();
  const [heal, setHeal] = useState();
  const [incrementAmount, setIncrementAmount] = useState("");

  const incrementValue = Number(incrementAmount) || 0;

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
            dispatch(setAmount({ hp: Number(e.target.value), id: id.id }));
          }}
        ></input>

        <form>
          <input
            type="text"
            value={heal}
            onFocus={(e) => resetValue(e)}
            onChange={(e) => {
              setIncrementAmount(e.target.value);
              setHeal(e.target.value);
            }}
          ></input>
          <br></br>
          <button
            className="healButton"
            type="submit"
            disabled={!heal}
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                incrementByAmount({ id: id.id, damage: incrementValue })
              );
              setHeal("");
            }}
          >
            Set Heal
          </button>
          <br></br>
        </form>

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
            type="submit"
            disabled={!input}
            onClick={(e) => {
              e.preventDefault();
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
