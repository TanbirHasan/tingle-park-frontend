import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { baseUrl } from './../../../baseURL';

const Shop = () => {
	// const { products, isLoading } = useSelector((state) => state.productsReducer);
	// const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const [sortingDropdown, setSortingDropdown] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(6);
	const pages = Math.ceil(count / size);
	const [sort, setSort] = useState(1);
	const menuRef = useRef();
	const menuRef2 = useRef();

	useEffect(() => {
		setIsLoading(true);
		fetch(`${baseUrl}/products/paginated-products?page=${page}&size=${size}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setCount(data.count);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
			});

		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				// setSortingDropdown(false);
				setShowDropdown(false);
			}
		};
		document.addEventListener('mousedown', handler);

		let handler2 = (e) => {
			if (!menuRef2.current.contains(e.target)) {
				setSortingDropdown(false);
			}
		};
		document.addEventListener('mousedown', handler2);

		return () => {
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('mousedown', handler2);
		};
	}, [page, size]);

	const showBestRatedProducts = async () => {
		setIsLoading(true);
		try {
			const products = await fetch(`${baseUrl}/products/best-rated`);
			const data = await products.json();
			setIsLoading(false);

			return setProducts(data);
		} catch (error) {
			setIsLoading(false);
			console.log(error.message);
		}
	};

	const showLatestProducts = async () => {
		setIsLoading(true);
		try {
			const products = await fetch(
				`${baseUrl}/products/paginated-products?page=${page}&size=${size}&sort=${-1}`
			);
			const data = await products.json();
			setIsLoading(false);
			setCount(data.count);
			return setProducts(data.products);
		} catch (error) {
			setIsLoading(false);
			console.log(error.message);
		}
	};

	return (
		<div className="w-[90%] mx-auto">
			<div className="mt-10">
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
							<Link
								to={'/shop'}
								className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
								Shop
							</Link>
						</li>
						<li className="flex items-center space-x-1">
							<span className="dark:text-gray-400">/</span>
							<Link className="flex items-center px-1 capitalize text-[#6c757d] cursor-default">
								Shop List
							</Link>
						</li>
					</ol>
				</nav>
			</div>

			<div className="flex flex-col lg:flex-row gap-10">
				{/* <div className="lg:w-[25%] ">
					<FilterProducts />
					<div className="">
						<h1 className="mt-10  p-5  font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 via-yellow-200 to-amber-200">
							Categories
						</h1>
					</div>
				</div> */}

				<div className="w-full">
					<div className="mt-10">
						<div className="flex justify-end items-center">
							{/* <div className="flex gap-4">
								<div className="bg-white p-2 cursor-pointer hover:bg-[#ECECEC] duration-500">
									<FaBorderAll />
								</div>
								<div className="bg-white p-2 cursor-pointer hover:bg-[#ECECEC] duration-500">
									<FaBars />
								</div>
							</div> */}
							<div className="flex items-center gap-3">
								<div>
									<div className="relative  flex items-center justify-between   duration-500 cursor-pointer  ">
										<div
											ref={menuRef2}
											onClick={() => setSortingDropdown(!sortingDropdown)}
											className="flex items-center gap-2">
											<button className="font-semibold bg-white p-2 px-2 flex items-center hover:bg-[#ECECEC] duration-500 focus:outline outline-[#ECECEC]">
												<span className="text-sm">Sorting</span>
												<AiFillCaretDown className="text-xs ml-2" />
											</button>
											<ul
												className={`menu absolute   w-[10rem] bg-white z-10 top-[40px] right-[-1px] duration-500 flex flex-col group text-box border text-[#212529]  ${
													sortingDropdown ? 'dropdown-active' : 'dropdown-inactive'
												} `}>
												<>
													<button
														onClick={showLatestProducts}
														className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
														<p className="font-semibold">Latest</p>
													</button>
													{/* <button className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
														<p className="font-semibold">Popularity</p>
													</button> */}
													<button
														onClick={showBestRatedProducts}
														className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
														<p className="font-semibold">Best Rating</p>
													</button>
												</>
											</ul>
										</div>
									</div>
								</div>
								<div ref={menuRef} onClick={() => setShowDropdown(!showDropdown)}>
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
													<button
														onClick={() => setSize(10)}
														className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
														<p className="font-semibold">10</p>
													</button>
													<button
														onClick={() => setSize(20)}
														className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
														<p className="font-semibold">20</p>
													</button>
													<button
														onClick={() => setSize(30)}
														className={`px-5 py-2 text-left hover:bg-[#F5F5F5]`}>
														<p className="font-semibold">30</p>
													</button>
												</>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{isLoading ? (
						<div className="flex h-screen justify-center items-center">
							<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
						</div>
					) : (
						''
					)}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10  mx-auto w-[75%]">
						{products.map((product) => (
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

					{/* <div className="flex justify-center   my-10">
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
							className="inline-flex items-center justify-center w-[35px] h-[38px] text-sm font-semibold border  text-[#FFD333]  ">
							2
						</button>
						<button
							type="button"
							className="inline-flex items-center justify-center w-[35px] h-[38px] text-sm font-semibold border  text-[#FFD333]  ">
							3
						</button>
						<button
							title="previous"
							type="button"
							className="inline-flex items-center justify-center w-[59px] h-[38px] py-0 border text-[#e6b400]  ">
							Next
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Shop;
