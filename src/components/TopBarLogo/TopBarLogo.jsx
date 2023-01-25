import React from 'react';
import { BiSearch } from 'react-icons/bi';

const TopBarLogo = () => {
	return (
		<div className="  bg-white hidden lg:block ">
			<div className="w-[90%] h-[80px] mx-auto flex items-center justify-between">
				<div>
					<h1 className="uppercase text-[40px] font-extrabold">
						<span className="bg-[#3d464d] text-[#ffd333] px-2">Multi</span>
						<span className="bg-[#ffd333] text-[#3d464d] px-2">Shop</span>
					</h1>
				</div>

				<div className='flex items-center relative'>
					<input
						type="text"
						placeholder="Search for Products"
						className="w-[450px] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF]   "
					/>
					<button className="absolute right-0 border h-[42px] px-5 border-r-0 bg-none">
						<BiSearch className='font-extrabold w-[20px] text-[#FFD333]' />
					</button>
				</div>

				<div className="">
					<p className="text-[#6c757d] text-[18px]">Customer Service</p>
					<p className="text-[#3d464d] text-[20px] font-medium">+012 345 6789</p>
				</div>
			</div>
		</div>
	);
};

export default TopBarLogo;
