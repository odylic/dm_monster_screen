import * as types from "../constants/actionTypes";


// actions also get from actionTypes
// both reducer and actions.js get from action types
export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});
