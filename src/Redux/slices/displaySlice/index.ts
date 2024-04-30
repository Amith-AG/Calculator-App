import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type displayState = {
  input: string;
  output: number | string;
};
const initialState: displayState = {
  input: "",
  output: 0,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    addValue: (state, actions: PayloadAction<string>) => {
      state.input += actions.payload;
    },
    calResult: (state) => {
      try {
        state.output = eval(state.input);
      } catch (error) {
        state.output = "Error";
      }
    },
    onClear: (state) => {
      state.input = "";
      state.output = 0;
    },
  },
});

export const { addValue, calResult, onClear } = displaySlice.actions;
export default displaySlice.reducer;
