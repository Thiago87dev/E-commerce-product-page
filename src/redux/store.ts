import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import showCartReducer from "./showCart/slice"
import showPopUpReducer from './showPopUp/slice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    showCart: showCartReducer,
    showPopUp: showPopUpReducer,
  },
   devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store