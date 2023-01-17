import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../../features/ProductSlice';
import FilterProducts from '../FilterProducts/FilterProducts';
import { FaBars } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Shop = () => {
	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();
	const [sortingDropdown, setSortingDropdown] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-10">
			<div className="lg:w-[22%]">
				<FilterProducts />
			</div>

			<div className="">
				<div className="lg:mt-10">
					<div className="flex justify-between items-center">
						<div className="flex gap-4">
							<div className="bg-white p-2">
								<FaBars />
							</div>
							<div className="bg-white p-2">
								<FaBars />
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div onClick={() => setSortingDropdown(!sortingDropdown)}>
								<div className="relative  flex items-center justify-between   duration-500 cursor-pointer  ">
									<div className="flex items-center gap-2">
										<button className="font-semibold bg-white p-2 px-2 flex items-center hover:bg-[#ECECEC] duration-500 focus:outline outline-[#ECECEC]">
											<span className="text-sm">Sorting</span>
											<AiFillCaretDown className="text-xs ml-2" />
										</button>
										<ul
											className={`menu absolute   w-[10rem] bg-white z-10 top-[40px] right-[-1px] duration-500 flex flex-col group text-box border text-[#212529]  ${
												sortingDropdown ? 'dropdown-active' : 'dropdown-inactive'
											} `}>
											<>
												<button  className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
													<p className='font-semibold'>Latest</p>
												</button>
												<button  className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
													<p className='font-semibold'>Popularity</p>
												</button>
												<button  className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
													<p className='font-semibold'>Best Rating</p>
												</button>

												
											</>
										</ul>
									</div>
								</div>
							</div>
							<div onClick={() => setShowDropdown(!showDropdown)}>
								<div className="relative  flex items-center justify-between  duration-500 cursor-pointer">
									<div className="flex items-center gap-2">
										<button className="font-semibold bg-white p-2 px-2 flex items-center hover:bg-[#ECECEC] duration-500 focus:outline outline-[#ECECEC]">
											<span className="text-sm">Showing</span>
											<AiFillCaretDown className="text-xs ml-2" />
										</button>
										<ul
											className={`menu absolute   w-[10rem] bg-white z-10 top-[40px] right-[-1px] duration-500 flex flex-col group text-box border text-[#212529]  ${
												showDropdown ? 'dropdown-active' : 'dropdown-inactive'
											} `}>
											<>
												<button  className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
													<p className='font-semibold'>10</p>
												</button>
												<button  className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
													<p className='font-semibold'>20</p>
												</button>
												<button  className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
													<p className='font-semibold'>30</p>
												</button>

												
											</>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
					{isLoading ? (
						<div className="flex h-screen justify-center items-center">
							<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
						</div>
					) : (
						''
					)}
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				<div className="flex justify-center   my-10">
					<button
						title="previous"
						type="button"
						className="inline-flex items-center justify-center w-[87px] h-[38px] py-0 border text-[#6c757d]  ">
						Previous
					</button>
					<button
						type="button"
						title="Page 1"
						className="inline-flex items-center justify-center w-[35px] h-[38px] text-sm font-semibold border  bg-[#FFD333] text-white ">
						1
					</button>
					<button
						type="button"
						title="Page 1"
						className="inline-flex items-center justify-center w-[35px] h-[38px] text-sm font-semibold border  text-[#FFD333]  ">
						2
					</button>
					<button
						type="button"
						title="Page 1"
						className="inline-flex items-center justify-center w-[35px] h-[38px] text-sm font-semibold border  text-[#FFD333]  ">
						3
					</button>
					<button
						title="previous"
						type="button"
						className="inline-flex items-center justify-center w-[59px] h-[38px] py-0 border text-[#e6b400]  ">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;