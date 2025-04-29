
import { createSlice } from '@reduxjs/toolkit';

const goodsCounterSlice = createSlice({
  name: 'goodsCounter',
  initialState: { value: 0 },
  reducers: {
    increaseGoods:  state => { state.value += 1; },
  }
});

export const { increaseGoods } = goodsCounterSlice.actions;
export default goodsCounterSlice.reducer;