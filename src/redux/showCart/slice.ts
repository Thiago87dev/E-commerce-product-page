import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const showCartSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    showTheCart: (state) => {
      return !state
    },
  },
});

export const { showTheCart } = showCartSlice.actions;

export default showCartSlice.reducer;
