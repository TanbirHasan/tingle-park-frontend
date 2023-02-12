import { Logout } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React, { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthProvider';

const TopNavbar = () => {
	// const [openAccountDropdown, setOpenAccountDropdown] = useState(false);
	// const [openUSDDropdown, setOpenUSDDropdown] = useState(false);
	// const [openENDropdown, setOpenENDropdown] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const cartItemCount = useSelector((state) => state.cartReducer.cartItemCount);

	const wishListCount = useSelector((state) => state.wishListReducer.wishItemCount);

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

	return (
		<div className="bg-[#F5F5F5]  lg:px-20 lg:h-[45px] block lg:hidden">
			<div className="flex flex-col-reverse lg:flex-row justify-between items-center  lg:h-[45px]">
				{/* <div className="hidden lg:flex  gap-5 text-[#6c757d] mb-5 lg:mb-0">
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
				</div> */}

				<div className="flex  items-start">
					{/* <div className="flex items-center gap-2">
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
					</div> */}
					<div className='flex items-center justify-between'>
						<div className="flex lg:hidden gap-5 my-3 lg:my-0">
							<div className="flex items-center gap-1">
								<AiFillHeart className="text-xl text-[#3D464D]" />
								<div className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
									<span className="font-bold text-sm">{wishListCount}</span>
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
						</div>
						<div>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavbar;
