import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';

const FeaturedProducts = () => {
	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const productSlices = products.slice(0, 8);

	return (
		<div className="my-20">
			<div className="flex items-center gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold  ">
					Featured Products
				</h1>
				<div className="flex flex-grow flex-wrap">
					<span className="w-full  border_style "></span>
				</div>
			</div>

			{isLoading ? (
				<div className="flex h-screen justify-center items-center">
					<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
				</div>
			) : (
				''
			)}

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
				{productSlices.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
