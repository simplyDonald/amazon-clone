import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export interface basketState {
  value: number;
}

const initialState: basketState = {
  value: 98,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement  } = basketSlice.actions;

export const itemsInBasket = (state:RootState) => state.basket.value;

export default basketSlice.reducer;
