import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    }
  }
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByValue(amount));
  }, 3000);
};
export default counterSlice.reducer;
