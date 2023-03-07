import DashboardLayout from '../../layout/DashboardLayout';
import Main from '../../layout/Main';
import CheckOut from '../../pages/CheckOut/CheckOut/CheckOut';
import Contact from '../../pages/Contact/Contact';
import AddProducts from '../../pages/Dashboard/AddProducts/AddProducts';
import AllProducts from '../../pages/Dashboard/AllProducts/AllProducts';
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import CategorizedProductPage from '../../pages/Home/Categories/CategorizedProductPage';
import HomePage from '../../pages/Home/HomePage/HomePage';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Shop from '../../pages/Shop/Shop/Shop';
import ShopDetails from '../../pages/ShopDetails/ShopDetails/ShopDetails';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ContactMessages from './../../pages/Dashboard/ContactMessages/ContactMessages';
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
				path: '/categorizedProduct',
				element: <CategorizedProductPage />,
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
				element: (
					<PrivateRoute>
						<CheckOut />,
					</PrivateRoute>
				),
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

	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/dashboard/allProducts',
				element: (
					<AdminRoute>
						<AllProducts />
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/addProducts',
				element: (
					<AdminRoute>
						<AddProducts />
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/contact-messages',
				element: (
					<AdminRoute>
						<ContactMessages />
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/allUsers',
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
		],
	},
]);
