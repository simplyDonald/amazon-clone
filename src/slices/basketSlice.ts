import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface basketState {
  items: Array<{T}>;
}

const initialState: basketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // const index = state.items.findIndex(
      //   (basketItem: any) => basketItem.id === action.payload.id
      // );
      // let newBasket = [...state.items];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product (id: ${action.payload.id}) as its not in basket!`
      //   );
      // }
      // state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
