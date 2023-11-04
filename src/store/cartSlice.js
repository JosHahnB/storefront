import { createSlice } from "@reduxjs/toolkit";
// import productData from '../productData.json'


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    // itemsInCart: 0,

  },
  reducers: {
    itemAddedToCart: (state, action) => {
      //when action occurs we do:
      state.cartItems = [...state.cartItems, action.payload];
      // state.itemsInCart += 1;
    },
  }
})

export default cartSlice;