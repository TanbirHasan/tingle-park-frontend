import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../features/CartSlice';
import CategorySlice from '../features/CategorySlice';
import ProductSlice from '../features/ProductSlice';
import WishListSlice from '../features/WishListSlice';

const store = configureStore({
	reducer: {
		cartReducer: CartSlice,
		wishListReducer: WishListSlice,
		productsReducer: ProductSlice,
		categoriesReducer: CategorySlice,
	},
});

export default store;
