import { configureStore } from "@reduxjs/toolkit";
import monsterReducer from "./monsterSlice";

export const store = configureStore({
  reducer: {
    monsters: monsterReducer,
  },
});
