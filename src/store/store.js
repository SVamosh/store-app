
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import reviewsSlice from './reviewsSlice';

export const store = configureStore({
  reducer: { 
    cart: cartSlice,
    reviews: reviewsSlice,
  },
});