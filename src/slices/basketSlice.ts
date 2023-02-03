import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { IProductProps } from "../types/typings";

export interface basketState {
  items: Array<IProductProps>;
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

export const selectCartItems = (state: RootState) => {
  const formattedProductObject = state.basket.items.reduce((acc, obj) => {
    // If the accumulator object already has a property with the same id as the current object, increment the count for that id
    if (acc[obj.id]) {
      acc[obj.id].count++;
    }
    // If the accumulator object doesn't have a property with the same id as the current object, set the count for that id to 1
    else {
      acc[obj.id] = {
        ...obj,
        count: 1,
      };
    }
    // Return the accumulator object
    return acc;
  }, {});

  // Return the formattedProductObject object
  return [...Object.values(formattedProductObject)];
};
export default basketSlice.reducer;
