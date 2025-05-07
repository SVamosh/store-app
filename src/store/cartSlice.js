
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        quantity: 0,
        totalPrice: 0 
    },
    reducers: {
        addToCart: (state, action) => {
            const [id, title, price] = action.payload;
            state.cart = [...state.cart, action.payload]; 
            state.quantity += 1;
            state.totalPrice = Number((state.totalPrice + price).toFixed(2));
        },

        removeFromCart: (state, action) => {
            const itemID = action.payload;
            state.quantity -= 1;
            state.cart = state.cart.filter(([id, title, price]) => id !== itemID);
            state.totalPrice = state.cart.reduce((sum, [id, title, price]) => sum += price, 0);
        },

        clearCart: (state, action) => {
            state.quantity = 0;
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
