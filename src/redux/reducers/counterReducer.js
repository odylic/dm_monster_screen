import * as types from "../constants/actionTypes";

const initialState = {
  count: 0,
};

// reducer gets actions from action types
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: state.count + 1,
      };

    case types.DECREMENT:
      return {
        count: state.count - 1,
      };

    default: {
      return state;
    }
  }
};

export default counterReducer;
