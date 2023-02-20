import Logout from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiFillHeart, AiOutlineClose, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthProvider';
import './navbar.css';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [openDropdown, setOpenDropdown] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [isPagesOpen, setIsPagesOpen] = useState(false);
	const [categories, setCategories] = useState([]);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick2 = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogOut = () => {
		logOut();
		setAnchorEl(null);
	};

	useEffect(() => {
		fetch(`categories.json`)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	});

	const menuRef = useRef();

	// useEffect(() => {
	// 	let handler = (e) => {
	// 		if (!menuRef.current.contains(e.target)) {
	// 			setOpenDropdown(false);
	// 			// setIsPagesOpen(false);
	// 		}
	// 	};
	// 	document.addEventListener('mousedown', handler);

	// 	return () => {
	// 		document.removeEventListener('mousedown', handler);
	// 	};
	// }, []);

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

			{/* <Link className={'group inline-block relative'}>
				<div
					onClick={() => setIsPagesOpen(!isPagesOpen)}
					className="flex items-center lg:justify-center hover:text-[#FFD333] ">
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
							onClick={() => setIsPagesOpen(!isPagesOpen)}
							className={({ isActive }) =>
								`${
									isActive ? 'text-white  hover:bg-[#FFD333]' : ''
								} hover:bg-white py-2 px-4 block font-bold`
							}>
							<li>Shopping Cart</li>
						</NavLink>
						<NavLink
							to={'/checkout'}
							onClick={() => setIsPagesOpen(!isPagesOpen)}
							className={({ isActive }) =>
								`${
									isActive ? 'text-white  hover:bg-[#FFD333]' : ''
								} hover:bg-white py-2 px-4 block font-bold `
							}>
							<li>Checkout</li>
						</NavLink>
					</ul>
				</div>
			</Link> */}
			<NavLink to={'/contact'} className="hover:text-[#FFD333]">
				<li>Contact</li>
			</NavLink>

			{user?.uid ? null : (
				<NavLink to={'/login'} className="hover:text-[#FFD333]">
					<li>Login</li>
				</NavLink>
			)}
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

			<div className="flex items-center gap-5">
				<div onClick={() => setOpenDropdown(!openDropdown)} className="">
					<div
						ref={menuRef}
						className="relative  text-white w-[300px]  flex items-center justify-between   duration-500 cursor-pointer">
						<div className="flex items-center gap-2">
							<button className="font-bold">Categories</button>
							<ul
								className={`menu absolute  space-y-2 w-full bg-white  top-[70px] right-[-1px] duration-500 flex flex-col group text-gray-500 text-box ${
									openDropdown ? 'dropdown-active' : 'dropdown-inactive'
								} `}>
								{menuItemsDropDown}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<NavLink to={'/contact'}>
				<li>Contact</li>
			</NavLink>

			{!user?.uid && (
				<NavLink to={'/login'}>
					<li>Login</li>
				</NavLink>
			)}

			{/* {user?.uid ? (
				<div className="mx-auto lg:hidden pr-10">
					<Tooltip
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: 'common.black',
									'& .MuiTooltip-arrow': {
										color: 'common.black',
									},
								},
							},
						}}
						arrow
						title={user?.displayName}>
						<Avatar
							onClick={handleClick2}
							size="small"
							src={user?.photoURL}
							sx={{ cursor: 'pointer', width: 52, height: 52 }}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}>
							<Avatar sx={{ width: 32, height: 32 }}></Avatar>
						</Avatar>
					</Tooltip>
				</div>
			) : (
				<NavLink to={'/login'}>
					<li>Login</li>
				</NavLink>
			)} */}
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

			<Link to="/shopping-cart">
				<div className="flex items-center gap-1">
					<BsCartFill className="text-2xl text-[#FFC800] cursor-pointer" />
					<div className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
						<span className="font-bold">{cartItemCount}</span>
					</div>
				</div>
			</Link>

			{user?.uid && (
				<div>
					<Tooltip
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: 'common.black',
									'& .MuiTooltip-arrow': {
										color: 'common.black',
									},
								},
							},
						}}
						arrow
						title={user?.displayName}>
						<Avatar
							onClick={handleClick2}
							size="small"
							src={user?.photoURL}
							sx={{ ml: 2, cursor: 'pointer' }}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}>
							<Avatar sx={{ width: 32, height: 32 }}></Avatar>
						</Avatar>
					</Tooltip>
					<Menu
						anchorEl={anchorEl}
						id="account-menu"
						open={open}
						onClose={handleClose}
						onClick={handleClose}
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: 'visible',
								filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
								mt: 1.5,
								'& .MuiAvatar-root': {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								'&:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									// bgcolor: 'background.paper',
									transform: 'translateY(-50%) rotate(45deg)',
									zIndex: 0,
								},
							},
						}}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
						{/* <MenuItem onClick={handleClose}>
							<Avatar /> Profile
						</MenuItem>
						<Divider /> */}
						<MenuItem onClick={handleLogOut}>
							<ListItemIcon>
								<Logout fontSize="small" />
							</ListItemIcon>
							Logout
						</MenuItem>
					</Menu>
				</div>
			)}
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
									{openDropdown ? <AiOutlineClose /> : <AiOutlineDown />}
								</div>
							</div>

							<div className="space-x-5 ml-10 flex links">{menuRoutes}</div>
						</div>

						<div className="flex items-center gap-4">{menuIcons}</div>
					</ul>

					<div className="flex justify-between items-center lg:hidden">
						<div>
							<h1 className="uppercase text-[25px] font-extrabold">
								<span className="bg-[#3d464d] text-[#ffd333] px-2">Multi</span>
								<span className="bg-[#ffd333] text-[#3d464d] px-2">Shop</span>
							</h1>
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

			<div className="block lg:hidden">
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
