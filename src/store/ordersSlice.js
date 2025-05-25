
import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders = [...state.orders, action.payload];
            console.log(state.orders);
        }
    }
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;