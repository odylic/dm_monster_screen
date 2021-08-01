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
  },
});

export const { addMonster } = monsterSlice.actions;

export const selectMonster = (state) => state.monsters.monsterList;

export default monsterSlice.reducer;
