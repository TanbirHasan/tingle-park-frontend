const { createSlice } = require('@reduxjs/toolkit');

const WishListSlice = createSlice({
	name: 'cart',
	initialState: { wishItemCount: 0, wishListProducts: [] },
	reducers: {
		incrementWishList: (state) => {
			state.wishItemCount += 1;
		},
		addItemsToWishList: (state, action) => {
			const product = action.payload;
			state.wishListProducts.push(product);
		},
	},
});

export const { incrementWishList, addItemsToWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
