import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state, action) => {
      // RTK - either Mutate the existing state or return a new state
      state.items.length = 0; // originalState = []
      // OR
      // return {items: []};
      // This new object will be replaced inside originalState = {items: []}

    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
