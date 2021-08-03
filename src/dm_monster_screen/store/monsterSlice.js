import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monsterList: [],
  initiativeOrder: [],
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
    addToInitiativeOrder: (state, action) => {
      state.initiativeOrder.push(action.payload);
    },
    sortInitiativeOrder: (state, action) => {
      const initiatives = state.initiativeOrder.sort((a, b) => {
        return b.initiative - a.initiative;
      });
    },
  },
});

export const {
  addMonster,
  getId,
  decrementByAmount,
  setAmount,
  addToInitiativeOrder,
  sortInitiativeOrder,
} = monsterSlice.actions;

export const selectMonster = (state) => state.monsters.monsterList;

export const selectInitiativeOrder = (state) => state.monsters.initiativeOrder;

export default monsterSlice.reducer;
