import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMonster, selectMonster } from "../store/monsterSlice";
import Monster from "./Monster";
import InitiativeOrder from "./InitiativeOrder";

export default function MonsterList() {
  const dispatch = useDispatch();

  const monsterList = useSelector(selectMonster);

  const createMonster = () => {
    dispatch(
      addMonster({
        hp: 0,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="app">
      <header className="header">
        <h1>MonsterList</h1>
        <br></br>
        <button onClick={createMonster}>Add Monster</button>
      </header>
      <InitiativeOrder />
      <br></br>
      <div className="monsterListContainer">
        {monsterList.map((monster) => {
          return <Monster key={monster.id} id={monster.id} hp={monster.hp} />;
        })}
      </div>
    </div>
  );
}
