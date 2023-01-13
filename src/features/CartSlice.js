const { createSlice } = require('@reduxjs/toolkit');

const CartSlice = createSlice({
	name: 'cart',
	initialState: { cartItemCount: 0, cartProducts: [] },
	reducers: {
		incrementCart: (state) => {
			state.cartItemCount += 1;
		},
		addItemsToCart: (state, action) => {
			const product = action.payload;
			state.cartProducts.push(product);
		},
	},
});

export const { incrementCart, addItemsToCart } = CartSlice.actions;
export default CartSlice.reducer;
