
import { createSlice } from '@reduxjs/toolkit';
import { userReviews } from '../services/userReviews';

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: userReviews,
    },
    reducers: {
        addReview: (state, action) => {
            state.reviews = [...state.reviews, action.payload];
        }
    }
});

export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;