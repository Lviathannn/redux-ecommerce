import { createSlice } from "@reduxjs/toolkit";

const initialState = { carts: [] };

const cartReducer = createSlice({
   name: "cart",
   initialState,
   reducers: {
      REMOVE: (state, action) => {
         const data = state.carts.filter((el) => {
            return el.id !== action.payload;
         });
         return { ...state, carts: data };
      },
      ADD: (state, action) => {
         // state.carts = [...state.carts, action.payload];
         const itemIndex = state.carts.findIndex((item) => {
            return item.id === action.payload.id;
         });

         if (itemIndex >= 0) {
            state.carts[itemIndex].qty += 1;
         } else {
            const temp = { ...action.payload, qty: 1 };
            return { ...state, carts: [...state.carts, temp] };
         }
      },
   },
});

export default cartReducer.reducer;
export const { ADD, REMOVE } = cartReducer.actions;
