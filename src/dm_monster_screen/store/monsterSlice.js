import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monsterList: [],
};

const monsterSlice = createSlice({
  name: "monsters",
  initialState,
  reducers: {
    addMonster: (state, action) => {
      state.monsterList.push(action.payload);
    },
    getId: (state, action) => {
      state.monsterList.map((monster) => {
        if (action.payload === monster.id) {
          const newMonster = { ...monster };
          console.log(action.payload);
        }
      });
    },

    setAmount: (state, action) => {
      state.monsterList.map((monster) => {
        if (action.payload.id === monster.id) monster.hp = action.payload.hp;
      });
    },
    decrementByAmount: (state, action) => {
      state.monsterList.map((monster) => {
        if (action.payload.id === monster.id)
          monster.hp -= action.payload.damage;
        if (monster.hp < 0) monster.hp = 0;
      });
    },
  },
});

export const { addMonster, getId, decrementByAmount, setAmount } =
  monsterSlice.actions;

export const selectMonster = (state) => state.monsters.monsterList;

export default monsterSlice.reducer;
