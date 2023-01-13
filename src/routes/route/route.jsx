import ProductDetail from '../../components/ProductDetail/ProductDetail';
import HomePage from '../../pages/Home/HomePage/HomePage';
import Main from './../../layout/Main';
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
				path: '/product-details',
				element: <ProductDetail />,
			},
		],
	},
]);
