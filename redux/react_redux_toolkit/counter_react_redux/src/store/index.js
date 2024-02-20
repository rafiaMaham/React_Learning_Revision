import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      // existing state
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default counterStore;
