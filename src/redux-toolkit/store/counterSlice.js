import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
      if (state.count < 0) state.count = 0;
    },
    setAmount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, decrementByAmount, setAmount } =
  counterSlice.actions;

export const selectCounter = (state) => state.counter.count;

// export default reducer, not reducers to the store
export default counterSlice.reducer;
