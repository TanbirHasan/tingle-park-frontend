import React, { useEffect, useRef, useState } from 'react';
import { AiFillHeart, AiOutlineClose, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isPagesOpen, setIsPagesOpen] = useState(false);

	const menuRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (e.target) {
				// setOpenDropdown(false);
				setIsPagesOpen(false);
			}
		};

		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, []);

	const cartItemCount = useSelector((state) => state.cartReducer.cartProducts.length);

	const wishListCount = useSelector((state) => state.wishListReducer.wishItemCount);

	const handleClick = () => setIsMenuOpen(!isMenuOpen);

	const menuItemsDropDown = (
		<>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Dresses</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Shirts</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Jeans</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Swimwear</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Sleepwear</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Sportswear</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Jumpsuits</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Blazers</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Jackets</button>
			</Link>
			<Link className="menu-item border-b p-2 px-8 hover:text-black duration-500">
				<button>Shoes</button>
			</Link>
		</>
	);

	const menuRoutes = (
		<>
			<NavLink to={'/'} className="hover:text-[#FFD333]">
				<li>Home</li>
			</NavLink>
			<NavLink to={'/shop'} className="hover:text-[#FFD333]">
				<li>Shop</li>
			</NavLink>
			<NavLink to={'/shop-detail'} className="hover:text-[#FFD333]">
				<li>Shop Detail</li>
			</NavLink>
			<Link className={'group inline-block relative'}>
				<div
					onClick={() => setIsPagesOpen(!isPagesOpen)}
					className="flex items-center lg:justify-center ">
					<li>Pages</li>
					<AiOutlineRight className="font-bold ml-1 group-hover:rotate-90 duration-500" />
				</div>

				<div ref={menuRef} className="flex items-center gap-2">
					<ul
						className={`menu absolute  space-y-2 w-[250px] mt-6 md:mt-0  md:w-[204px] py-2 z-10 top-[46px] flex flex-col group text-black text-box bg-[#FFD333]  md:text-md ${
							isPagesOpen ? 'dropdown-active' : 'dropdown-inactive'
						}  `}>
						<NavLink
							to={'/shopping-cart'}
							className={({ isActive }) =>
								`${
									isActive ? 'text-white  hover:bg-[#FFD333]' : ''
								} hover:bg-white py-2 px-4 block font-bold`
							}>
							<li>Shopping Cart</li>
						</NavLink>
						<NavLink
							to={'/checkout'}
							className={({ isActive }) =>
								`${
									isActive ? 'text-white  hover:bg-[#FFD333]' : ''
								} hover:bg-white py-2 px-4 block font-bold `
							}>
							<li>Checkout</li>
						</NavLink>
					</ul>
				</div>
			</Link>
			<NavLink to={'/contact'} className="hover:text-[#FFD333]">
				<li>Contact</li>
			</NavLink>
		</>
	);

	const menuRoutesMobile = (
		<>
			<NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to={'/'}>
				<li>Home</li>
			</NavLink>
			<NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to={'/shop'}>
				<li>Shop</li>
			</NavLink>
			<NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to={'/'}>
				<li>Shop Detail</li>
			</NavLink>
			<NavLink className={'group inline-block relative'}>
				<div
					onClick={() => setIsPagesOpen(!isPagesOpen)}
					className="flex items-center lg:justify-center ">
					<li>Pages</li>
					<AiOutlineRight className="font-bold ml-1 group-hover:rotate-90 duration-500" />
				</div>

				<div className="flex items-center gap-2">
					<ul
						className={`menu absolute  space-y-2 w-[250px] mt-6 md:mt-0  md:w-[204px] py-2 z-10 top-[46px] flex flex-col group text-gray-500 text-box bg-[#FFD333]  md:text-md ${
							isPagesOpen ? 'dropdown-active' : 'dropdown-inactive'
						}  `}>
						<NavLink
							to={'/'}
							className={({ isActive }) =>
								`${isActive ? 'text-white font-bold' : undefined} hover:bg-white py-2 px-4 block `
							}
							onClick={() => setIsPagesOpen(!isPagesOpen)}>
							<li className="">Checkout</li>
						</NavLink>
						<NavLink
							to={'/'}
							onClick={() => setIsPagesOpen(!isPagesOpen)}
							className={({ isActive }) =>
								`${isActive ? 'bg-white font-bold' : undefined} hover:bg-white py-2 px-4 block `
							}>
							<li className="">Shopping Cart</li>
						</NavLink>
					</ul>
				</div>
			</NavLink>
			<NavLink to={'/contact'}>
				<li>Contact</li>
			</NavLink>
		</>
	);

	const menuIcons = (
		<>
			<div className="flex items-center gap-1">
				<AiFillHeart className="text-2xl text-[#FFC800]" />
				<div className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
					<span className="font-bold">{wishListCount}</span>
				</div>
			</div>
			<div className="flex items-center gap-1">
				<BsCartFill className="text-2xl text-[#FFC800] cursor-pointer" />
				<div className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
					<span className="font-bold">{cartItemCount}</span>
				</div>
			</div>
		</>
	);

	return (
		<div>
			<nav className="bg-[#3D464D] h-[70px] relative  w-full  text-white flex items-center">
				<div className="w-[90%] mx-auto">
					<ul className="items-center hidden space-x-8 lg:flex justify-between">
						<div className="flex items-center gap-5">
							<div onClick={() => setOpenDropdown(!openDropdown)} className="">
								<div className="relative bg-[#FFD333] w-[300px] h-[70px] flex items-center justify-between p-5 text-[#3D464D] hover:bg-[#FFC800] duration-500 cursor-pointer">
									<div className="flex items-center gap-2">
										<FaBars />
										<button className="font-bold">Categories</button>
										<ul
											className={`menu absolute  space-y-2 w-[304px] bg-white z-10 top-[70px] right-[-1px] duration-500 flex flex-col group text-gray-500 text-box ${
												openDropdown ? 'dropdown-active' : 'dropdown-inactive'
											} `}>
											{menuItemsDropDown}
										</ul>
									</div>
									<AiOutlineDown />
								</div>
							</div>

							<div className="space-x-5 ml-10 flex links">{menuRoutes}</div>
						</div>

						<div className="flex gap-10">{menuIcons}</div>
					</ul>

					<div className="flex justify-between items-center lg:hidden">
						<div>
							<h1 className="text-4xl font-extrabold">LOGO</h1>
						</div>
						<div className={`flex justify-end lg:hidden`} onClick={handleClick}>
							{isMenuOpen ? (
								<AiOutlineClose className="text-3xl text-[#FFD333]" />
							) : (
								<FaBars className="text-3xl text-[#FFD333]" />
							)}
						</div>
					</div>
				</div>
			</nav>

			<div className="">
				<div
					className={`${
						isMenuOpen ? 'menu-active h-full ' : 'menu-inactive'
					}    mobile-menu bg-[#3D464D] text-white`}>
					<div className="flex flex-col gap-5 text-2xl">
						<div className="flex flex-col space-y-10 my-5 pl-10 font-bold mobile-links ">
							{menuRoutesMobile}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
