import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { baseUrl } from '../../../baseURL';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';

const RecentProducts = () => {
	// const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const showLatestProducts = async () => {
			setIsLoading(true);
			try {
				const products = await fetch(`${baseUrl}/products/recent-products`);
				const data = await products.json();
				setProducts(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error.message);
			}
		};
		showLatestProducts();
	}, []);

	const productSlices = products.slice(0, 8);

	// const cartItems = useSelector((state) => state.cartReducer.cartProducts);
	// console.log(cartItems);

	// const productSlices = [...products];
	// productSlices.pop();

	// console.log(productSlices);

	return (
		<div className="my-20">
			<div className="flex items-center gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold ">
					Recent Products
				</h1>
				<div className="flex flex-grow flex-wrap">
					<span className="w-full  border_style "></span>
				</div>
			</div>

			<div>
				{isLoading ? (
					<div className="flex h-screen justify-center items-center">
						<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
					</div>
				) : (
					''
				)}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
					{productSlices.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RecentProducts;
