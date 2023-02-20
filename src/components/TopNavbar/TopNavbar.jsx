import { Logout } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React, { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { useProSidebar } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthProvider';
import { CgMenuRight } from 'react-icons/cg';

const TopNavbar = () => {
	const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
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
		<div className="bg-[#F5F5F5]  lg:px-20 lg:h-[45px]  lg:hidden flex items-center justify-between px-10">
			<div className="flex flex-col-reverse lg:flex-row justify-between items-center  lg:h-[45px]">
				<div className="flex">
					<div className="flex items-center justify-between">
						<div className="flex lg:hidden gap-2 my-3 lg:my-0">
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
					</div>
				</div>
			</div>
			<div className="flex justify-end flex-grow gap-2">
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
				{broken && (
					<button onClick={() => toggleSidebar()}>
						<CgMenuRight size={30} />
					</button>
				)}
			</div>
		</div>
	);
};

export default TopNavbar;
