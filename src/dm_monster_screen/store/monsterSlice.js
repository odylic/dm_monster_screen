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
    deleteMonster: (state, action) => {
      state.monsterList = state.monsterList.filter(
        (item) => item.id !== action.payload
      );
    },
    setMonster: (state, action) => {
      console.log('test')
      state.monsterList = action.payload;
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
    incrementByAmount: (state, action) => {
      state.monsterList.map((monster) => {
        if (action.payload.id === monster.id)
          monster.hp += action.payload.damage;
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
    deleteFromInitiativeOrder: (state, action) => {
      state.initiativeOrder = state.initiativeOrder.filter(
        (item) => item.id !== action.payload
      );
    },
    setInitiativeOrder: (state, action) => {
      state.initiativeOrder = action.payload;
    },
  },
});

export const {
  addMonster,
  deleteMonster,
  setMonster,
  getId,
  decrementByAmount,
  setAmount,
  addToInitiativeOrder,
  sortInitiativeOrder,
  deleteFromInitiativeOrder,
  incrementByAmount,
  setInitiativeOrder,
} = monsterSlice.actions;

export const selectMonster = (state) => state.monsters.monsterList;

export const selectInitiativeOrder = (state) => state.monsters.initiativeOrder;

export default monsterSlice.reducer;
