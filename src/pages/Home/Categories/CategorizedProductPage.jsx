import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';
import { baseUrl } from './../../../baseURL';

const CategorizedProductPage = () => {
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(6);
	const location = useLocation();

	const { products } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const categorizedProducts1 = products.filter(
		(product) => product.category === location.state?.categoryName
	);

	const pages = Math.ceil(categorizedProducts1.length / size);

	const {
		data: categorizedProducts = [],
		refetch,
		isLoading,
		isPreviousData,
	} = useQuery({
		queryKey: ['categorizedProducts', location.state._id, page, size],
		queryFn: async () => {
			const res = await fetch(
				`${baseUrl}/products/category/${location.state._id}?page=${page}&size=${size}`
			);
			const result = await res.json();
			const data = result.products;
			setCount(result.count);

			return data;
		},
		keepPreviousData: true,
	});

	return (
		<>
			{isLoading ? (
				<div className="flex h-screen justify-center items-center">
					<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
				</div>
			) : (
				<div className="w-[90%] mx-auto my-10">
					<div className="my-10">
						<nav className="w-full h-[48px] flex px-4 bg-white ">
							<ol className="flex  space-x-2 ">
								<li className="flex items-center space-x-1">
									<Link
										to={'/'}
										className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
										Home
									</Link>
								</li>

								<li className="flex items-center space-x-1">
									<span className="dark:text-gray-400">/</span>
									<div className="flex items-center px-1 capitalize text-[#6c757d] cursor-default">
										Categories
									</div>
								</li>
								<li className="flex items-center space-x-1">
									<span className="dark:text-gray-400">/</span>
									<div className="flex items-center px-1 capitalize text-[#6c757d] cursor-default">
										<span>{location?.state?.categoryName}</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>
					{/* <h1 className="text-5xl text-center">Category - </h1> */}

					{isLoading ? (
						<div className="flex h-screen justify-center items-center w-full">
							<PropagateLoader color="#FFD333" size={20} speedMultiplier={2} />
						</div>
					) : (
						''
					)}

					<div className="flex justify-center items-center gap-20 flex-wrap my-20  mx-auto">
						{categorizedProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>

					<div className="flex  w-2/4 items-center  justify-center mx-auto  space-y-0 flex-row my-10 ">
						{isLoading ? (
							<div className="flex h-screen justify-center items-center">
								<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
							</div>
						) : (
							<>
								{[...Array(pages).keys()].map((number) => (
									<button
										key={number}
										className={`inline-flex items-center justify-center w-[35px] h-[38px] text-sm font-semibold border ${
											page === number
												? 'bg-[#FFD333] text-white font-extrabold text-xl'
												: 'text-[#FFD333]'
										}`}
										onClick={() => setPage(number)}>
										{number + 1}
									</button>
								))}
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default CategorizedProductPage;

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
