import CheckOut from '../../pages/CheckOut/CheckOut/CheckOut';
import Contact from '../../pages/Contact/Contact';
import HomePage from '../../pages/Home/HomePage/HomePage';
import Shop from '../../pages/Shop/Shop/Shop';
import ShopDetails from '../../pages/ShopDetails/ShopDetails/ShopDetails';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import Main from './../../layout/Main';
import Login from './../../pages/Login/Login';
import Register from './../../pages/Register/Register';
const { createBrowserRouter } = require('react-router-dom');

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},

			{
				path: '/shop',
				element: <Shop />,
			},
			{
				path: '/shop-details',
				element: <ShopDetails />,
			},
			{
				path: '/shopping-cart',
				element: <ShoppingCart />,
			},
			{
				path: '/checkout',
				element: <CheckOut />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);
