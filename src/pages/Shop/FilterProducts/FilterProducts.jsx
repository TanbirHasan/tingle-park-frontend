import React from 'react';

const FilterProducts = () => {
	return (
		<div className="mt-10 bg-white">
			<div>
				{/* Filter by price */}
				<div className="flex items-center gap-2">
					<h1 className="uppercase text-xl font-semibold my-4">Filter By Price</h1>
					<div className="flex flex-grow flex-wrap">
						<span className="w-full  border_style "></span>
					</div>
				</div>

				<div className="bg-[#FFFFFF]  p-5 space-y-4">
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								defaultChecked
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">All price</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">1000</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">$0 - $100</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">150</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">$100 - $200</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">295</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">$200 - $300</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">246</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">$300 - $400</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">145</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">$400 - $500</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">168</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				{/* Filter by color */}
				<div className="flex items-center gap-2">
					<h1 className="uppercase text-xl font-semibold my-4">Filter By color</h1>
					<div className="flex flex-grow flex-wrap">
						<span className="w-full  border_style "></span>
					</div>
				</div>
				<div className="bg-[#FFFFFF]  p-5 space-y-4">
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								defaultChecked
								className=" appearance-none text-[#ffd333] focus:ring-0  focus:ring-transparent"
							/>
							<p className="ml-2">All Color</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">1000</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">Black</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">150</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">White</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">295</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">Red</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">246</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">Blue</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">145</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">Green</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">168</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-10">
				{/* Filter by size */}
				<div className="flex items-center gap-2">
					<h1 className="uppercase text-xl font-semibold my-4">Filter By size</h1>
					<div className="flex flex-grow flex-wrap">
						<span className="w-full  border_style "></span>
					</div>
				</div>
				<div className="bg-[#FFFFFF]  p-5 space-y-4">
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								defaultChecked
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">All Size</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">1000</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-transparent"
							/>
							<p className="ml-2">XS</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">150</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">S</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">295</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">M</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">246</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">L</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">145</span>
						</div>
					</div>
					<div className="flex items-center justify-between text-[#6c757d] ">
						<div className="flex items-center">
							<input
								type="checkbox"
								className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
							/>
							<p className="ml-2">XL</p>
						</div>
						<div className="">
							<span className="border border-[#aaacaf] px-2 text-[12px]">168</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterProducts;
