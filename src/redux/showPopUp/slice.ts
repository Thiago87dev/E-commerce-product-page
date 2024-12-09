import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const showPopUpSlice = createSlice({
  name: "showPopUp",
  initialState,
  reducers: {
    showThePopUp: (state) => {
      return !state
    },
  },
});

export const { showThePopUp } = showPopUpSlice.actions;

export default showPopUpSlice.reducer;
