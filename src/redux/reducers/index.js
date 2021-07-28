import { combineReducers } from "redux";
// import all reducers here
import counterReducer from "./counterReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  counter: counterReducer,
});

// make the combined reducers available for import
export default reducers;
