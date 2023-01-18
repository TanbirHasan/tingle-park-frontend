import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillCaretDown, AiFillHeart } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const TopNavbar = () => {
	const [openAccountDropdown, setOpenAccountDropdown] = useState(false);
	const [openUSDDropdown, setOpenUSDDropdown] = useState(false);
	const [openENDropdown, setOpenENDropdown] = useState(false);

	const cartItemCount = useSelector((state) => state.cartReducer.cartItemCount);

	const wishListCount = useSelector((state) => state.wishListReducer.wishItemCount);

	return (
		<div className="bg-[#F5F5F5]  lg:px-20 lg:h-[45px]">
			<div className="flex flex-col-reverse lg:flex-row justify-between items-center  lg:h-[45px]">
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

				<div className="flex flex-wrap justify-center">
					<div className="flex items-center gap-2">
						<div onClick={() => setOpenAccountDropdown(!openAccountDropdown)}>
							<div className="relative  flex items-center justify-between  duration-500 cursor-pointer">
								<div className="flex items-center gap-2">
									<button className="lg:font-semibold bg-white p-1 lg:p-1 lg:px-2 flex items-center hover:bg-[#ECECEC] duration-500">
										<span className="text-sm">My Account</span>
										<AiFillCaretDown className="text-xs" />
									</button>
									<ul
										className={`menu absolute  lg:w-[10rem] bg-white z-10 top-[30px] lg:top-[35px] lg:right-0 duration-500 flex flex-col group text-box border border-[#E6E6E6] shadow-xl  ${
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
						<div onClick={() => setOpenUSDDropdown(!openUSDDropdown)}>
							<div className="relative  flex items-center justify-between   duration-500 cursor-pointer">
								<div className="flex items-center gap-2">
									<button className="font-semibold bg-white p-1 px-2 flex items-center hover:bg-[#ECECEC] duration-500">
										<span className="text-sm">USD</span>
										<AiFillCaretDown className="text-xs" />
									</button>
									<ul
										className={`menu absolute w-[10rem] bg-white z-10 top-[35px] right-[0px] duration-500 flex flex-col group text-box uppercase border border-[#E6E6E6] shadow-xl ${
											openUSDDropdown ? 'dropdown-active' : 'dropdown-inactive'
										} `}>
										<>
											<NavLink
												to={'/eur'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] py-2 px-4 `
												}>
												<p>Eur</p>
											</NavLink>

											<NavLink
												to={'/gbp'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] py-2 px-4 `
												}>
												<p>Gbp</p>
											</NavLink>
											<NavLink
												to={'/cad'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] py-2 px-4 `
												}>
												<p>Cad</p>
											</NavLink>
										</>
									</ul>
								</div>
							</div>
						</div>
						<div onClick={() => setOpenENDropdown(!openENDropdown)}>
							<div className="relative  flex items-center justify-between   duration-500 cursor-pointer">
								<div className="flex items-center gap-2">
									<button className="font-semibold bg-white p-1  flex items-center hover:bg-[#ECECEC] duration-500">
										<span className="text-sm">EN</span>
										<AiFillCaretDown className="text-xs" />
									</button>
									<ul
										className={`menu absolute w-[10rem] bg-white z-10 right-0 top-[30px] duration-500 flex flex-col group text-box uppercase border border-[#E6E6E6] shadow-xl ${
											openENDropdown ? 'dropdown-active' : 'dropdown-inactive'
										} `}>
										<>
											<NavLink
												to={'/eur'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] py-2 px-4 `
												}>
												<p>Fr</p>
											</NavLink>

											<NavLink
												to={'/gbp'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] py-2 px-4 `
												}>
												<p>Ar</p>
											</NavLink>
											<NavLink
												to={'/cad'}
												className={({ isActive }) =>
													`${
														isActive ? 'bg-[#FFC800] font-bold' : undefined
													} hover:bg-[#F5F5F5] py-2 px-4 `
												}>
												<p>Ru</p>
											</NavLink>
										</>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="flex lg:hidden gap-5 my-3 lg:my-0">
						<div className="flex items-center gap-1">
							<AiFillHeart className="text-xl text-[#3D464D]" />
							<div className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
								<span className="font-bold text-sm">{wishListCount}</span>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<BsCartFill className="text-xl text-[#3D464D] cursor-pointer" />
							<div className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
								<span className="font-bold text-sm">{cartItemCount}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavbar;
