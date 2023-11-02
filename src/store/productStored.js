import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData.json'
const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: productData.products,
    selectedProduct: undefined,
    categories: productData.categories,
    selectedCategory: 'all'
  },
  reducers: {
    //name of action to dispatch, state, action
    showProduct: (state, action) => {
      //when action occurs we do:
      state.selectedProduct = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
});

export default productSlice;