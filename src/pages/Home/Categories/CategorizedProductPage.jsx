import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';

const CategorizedProductPage = () => {
	const location = useLocation();

	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const categorizedProducts = products.filter(
		(product) => product.category === location.state.name
	);

	return (
		<div className="w-[90%] mx-auto my-10">
			<h1 className="text-5xl text-center">Category - {location.state.name}</h1>

			{isLoading ? (
				<div className="flex h-screen justify-center items-center w-full">
					<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
				</div>
			) : (
				''
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20  mx-auto w-[75%]">
				{categorizedProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CategorizedProductPage;
