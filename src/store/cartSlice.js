
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
            state.totalPrice = parseFloat((state.totalPrice + price).toFixed(2));
        },

        removeFromCart: (state, action) => {
            const [itemID, price] = action.payload;
            state.quantity -= 1;
            state.cart = state.cart.filter(([id, title, price]) => id !== itemID);
            state.totalPrice = parseFloat((state.totalPrice - price).toFixed(2));
        },

        clearCart: (state, action) => {
            state.quantity = 0;
            state.totalPrice = 0;
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
