
import { configureStore } from '@reduxjs/toolkit';
import goodsCounterSlice from './goodsCounterSlice';

export const store = configureStore({
  reducer: { goodsCounter: goodsCounterSlice }
});