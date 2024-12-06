import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductProps {
  image: string;
  title: string;
  price: number;
  quantity?: number;
}

interface CartState {
  products: ProductProps[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductProps>) => {
      state.products = [];

      state.products = [ {...action.payload}];
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
