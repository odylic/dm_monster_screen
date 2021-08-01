import React, { Component } from "react";
import "../App.scss";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainContainer from "../redux/containers/MainContainer";
import ReduxToolKitApp from "../redux-toolkit/components/ReduxToolKitApp";

const initialState = {
  count: 0,
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        {/* this store in this file */}
        <Provider store={store}>
          <Counter />
        </Provider>
        {/* mainContainer's store is called in index.js */}
        <MainContainer />
        {/* redux tool kit version */}
        <ReduxToolKitApp />
      </div>
    );
  }
}

export default App;
