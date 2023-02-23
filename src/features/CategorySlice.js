import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../baseURL';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
	const categories = fetch(`${baseUrl}/categories`).then((res) => res.json());
	return categories;
});

const CategorySlice = createSlice({
	name: 'categories',
	initialState: {
		isLoading: false,
		categories: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.categories = action.payload;
			state.error = null;
		});
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.categories = [];
			state.error = action.error.message;
		});
	},
});

export default CategorySlice.reducer;
