import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./redux/reducers";

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers, composeWithDevTools());

export default store;