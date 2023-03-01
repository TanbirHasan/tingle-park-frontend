import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../baseURL';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
	const reviews = fetch(`${baseUrl}/reviews`)
		.then((res) => res.json())
		.then((data) => data.review);
	return reviews;
});

const ReviewsSlice = createSlice({
	name: 'reviews',
	initialState: {
		isLoading: false,
		reviews: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchReviews.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchReviews.fulfilled, (state, action) => {
			state.isLoading = false;
			state.reviews = action.payload;
			state.error = null;
		});
		builder.addCase(fetchReviews.rejected, (state, action) => {
			state.isLoading = false;
			state.reviews = [];
			state.error = action.error.message;
		});
	},
});

export default ReviewsSlice.reducer;
