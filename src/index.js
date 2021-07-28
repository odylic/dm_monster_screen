import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Router from "./components/Router";
import { Provider } from "react-redux";
// needed this import to stop the regenerator runtime error and because babel polyfill is deprecated
import "regenerator-runtime/runtime";
import store from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
