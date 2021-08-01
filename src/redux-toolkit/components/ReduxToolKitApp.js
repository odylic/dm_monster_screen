import React from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Counter from "./counter";

export default function ReduxToolKitApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
