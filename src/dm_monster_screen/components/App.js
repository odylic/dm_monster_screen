import React from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import MonsterList from "./MonsterList";

export default function ReduxToolKitApp() {
  return (
    <Provider store={store}>
      <MonsterList />
    </Provider>
  );
}
