import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillCaretDown, AiFillHeart } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';

const TopNavbar = () => {
	const [openAccountDropdown, setOpenAccountDropdown] = useState(false);

	return (
		<div className="bg-[#F5F5F5] px-10 lg:h-[45px]">
			<div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:h-[45px]">
				<div className="hidden lg:flex  gap-5 text-[#6c757d] mb-5 lg:mb-0">
					<Link>
						<p className="hover:underline">About</p>
					</Link>
					<Link>
						<p className="hover:underline">Contact</p>
					</Link>
					<Link>
						<p className="hover:underline">Help</p>
					</Link>
					<Link>
						<p className="hover:underline">FAQs</p>
					</Link>
				</div>

				<div className='flex'>
					<div className="flex items-center gap-5">
						<div onClick={() => setOpenAccountDropdown(!openAccountDropdown)}>
							<div className="relative  flex items-center justify-between p-5  duration-500 cursor-pointer">
								<div className="flex items-center gap-2">
									<button className="font-semibold bg-white p-1 px-2 flex items-center hover:bg-[#ECECEC] duration-500">
										<span className="text-sm">My Account</span>
										<AiFillCaretDown className="text-xs" />
									</button>
									<ul
										className={`menu absolute   w-[200px] bg-white z-10 top-[70px] right-[-1px] duration-500 flex flex-col group text-box   ${
											openAccountDropdown ? 'dropdown-active' : 'dropdown-inactive'
										} `}>
										<>
											<NavLink
												to={'/login'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] p-3 `
												}>
												<p>Sign In</p>
											</NavLink>

											<NavLink
												to={'/register'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] p-3 `
												}>
												<p>Sign Up</p>
											</NavLink>
										</>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='flex lg:hidden gap-5'>
						<div className="flex items-center gap-1">
							<AiFillHeart className="text-xl text-[#3D464D]" />
							<div className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
								<span className="font-bold text-sm">0</span>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<BsCartFill className="text-xl text-[#3D464D] cursor-pointer" />
							<div className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
								{/* <span className="font-bold text-sm">{cartItemCount}</span> */}
								<span className="font-bold text-sm">0</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavbar;
