import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../features/CartSlice';
import ProductSlice from '../features/ProductSlice';
import WishListSlice from '../features/WishListSlice';

const store = configureStore({
	reducer: {
		cartReducer: CartSlice,
		wishListReducer: WishListSlice,
		productsReducer: ProductSlice,

	},
});

export default store;
