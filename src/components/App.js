import React from "react";
import "../App.scss";
import Counter from "./Counter";
import configureStore from "./store";
import { Provider } from "react-redux";
// import store from "./store";
import { createStore } from "redux";
import MainContainer from "../redux/containers/MainContainer";

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

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(async () => {
    const response1 = await fetch("/api");
    const response2 = await response1.json();
    const data = await response2;
    console.log(data.message);
    setData(data.message);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        React
      </header>
      <Provider store={store}>
        <Counter />
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
