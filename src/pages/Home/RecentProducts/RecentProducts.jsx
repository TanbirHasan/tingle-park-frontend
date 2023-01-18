import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';

const RecentProducts = () => {
	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	// const cartItems = useSelector((state) => state.cartReducer.cartProducts);
	// console.log(cartItems);

	const productSlices = [...products]	
	productSlices.pop()
	
	
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
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
					{isLoading ? (
						<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
					) : (
						''
					)}
					{productSlices.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RecentProducts;
