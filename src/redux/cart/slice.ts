import { createSlice } from "@reduxjs/toolkit"; // PayloadAction

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

    }
})

export default cartSlice.reducer