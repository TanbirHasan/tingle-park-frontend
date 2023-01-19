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
		
		removeItemsFromCart: (state, action) => {
			const id = action.payload;
			state.cartProducts = state.cartProducts.filter((product) => product.id !== id);
			// state.cartProducts = remaining;
		},
	},
});

export const { incrementCart, addItemsToCart, removeItemsFromCart } = CartSlice.actions;
export default CartSlice.reducer;
