import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from './../baseURL';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	const products = fetch(`${baseUrl}/products`).then((res) => res.json());
	return products;
});

const ProductSlice = createSlice({
	name: 'products',
	initialState: {
		isLoading: false,
		products: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
			state.error = null;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.products = [];
			state.error = action.error.message;
		});
	},
});

export default ProductSlice.reducer;
