import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMonster, selectMonster } from "../store/monsterSlice";
import Monster from "./Monster";

export default function MonsterList() {
  const dispatch = useDispatch();

  const monsterList = useSelector(selectMonster);
  const createMonster = () => {
    dispatch(
      addMonster({
        id: Date.now(),
      })
    );
  };

  return (
    <div>
      MonsterList <br></br>
      <button onClick={createMonster}>Add Monster</button>
      <br></br>
      {monsterList.map((monster) => {
        return <Monster key={monster.id} id={monster.id} />;
      })}
    </div>
  );
}
