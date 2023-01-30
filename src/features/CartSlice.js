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
		increaseQuantity: (state, action) => {
			const itemInCart = state.cartProducts.find((p) => p.id === action.payload.id);

			itemInCart.quantity++;
			itemInCart.stockAmount--;
			if (itemInCart.quantity === itemInCart.stockAmount) {
				itemInCart.quantity = itemInCart.stockAmount;
			}
		},
		decreaseQuantity: (state, action) => {
			const itemInCart = state.cartProducts.find((p) => p.id === action.payload.id);
			itemInCart.quantity--;
			itemInCart.stockAmount++;
		},

		removeItemsFromCart: (state, action) => {
			const id = action.payload;
			state.cartProducts = state.cartProducts.filter((product) => product.id !== id);
		},
	},
});

export const {
	incrementCart,
	addItemsToCart,
	removeItemsFromCart,
	increaseQuantity,
	decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
