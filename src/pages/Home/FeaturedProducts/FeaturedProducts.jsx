import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';

const FeaturedProducts = () => {
	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);


	return (
		<div className="my-20">
			<div className="flex items-center justify-center lg:justify-start gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold  lg:text-left">
					Featured Products
				</h1>
				<div className="hidden lg:flex w-fit">
					<span className="w-6 h-1 border border-dashed bg-red-500"></span>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
				{isLoading ? (
					<div className='flex h-screen justify-center items-center'>
						<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
					</div>
				) : (
					''
				)}
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
