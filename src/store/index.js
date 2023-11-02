import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productStored';

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
})

