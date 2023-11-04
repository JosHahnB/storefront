import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import categorySlice from './categorySlice';

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
})

