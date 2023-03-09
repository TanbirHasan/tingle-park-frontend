import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import React, { useContext } from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import { AuthContext } from '../Contexts/UserAuthProvider';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
	const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
	const { user, logOut } = useContext(AuthContext);

	const [isAdmin, isAdminLoading] = useAdmin(user?.email);

	if (isAdminLoading) {
		return (
			<div className="flex h-screen justify-center items-center">
				<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
			</div>
		);
	}

	return (
		<div>
			<TopNavbar />
			{/* <Navbar /> */}

			<div className="flex">
				<div className="">
					<Sidebar
						backgroundColor="#ffff"
						// style={{ height: '100vh' }}
						transitionDuration={800}
						width="300px"
						breakPoint="lg">
						<aside className="flex flex-col  h-screen px-4 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l ">
							<div className="flex flex-col items-center mt-6 -mx-2 mb-5">
								<img
									className="object-cover w-24 h-24 mx-2 rounded-full"
									src={user?.photoURL}
									alt="avatar"
								/>
								<h4 className="mx-2 mt-2 font-medium text-gray-800 ">{user?.displayName}</h4>
								<p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">{user?.email}</p>
								{isAdmin ? (
									<span className="px-4 py-2 mt-5 text-base rounded-full text-green-600  bg-green-200 ">
										Admin
									</span>
								) : (
									<span className="px-4 py-2 mt-5 text-base rounded-full text-blue-600  bg-blue-200 ">
										User
									</span>
								)}
							</div>

							<div className="flex flex-col justify-between flex-1 mt-6 mb-20">
								<Menu>
									{isAdmin ? (
										<>
											<MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
											<MenuItem
												component={<Link to="/dashboard/allProducts" />}
												icon={<Inventory2OutlinedIcon />}>
												All Products
											</MenuItem>
											<MenuItem
												component={<Link to="/dashboard/addProducts" />}
												icon={<ProductionQuantityLimitsRoundedIcon />}>
												Add Products
											</MenuItem>
											<MenuItem
												component={<Link to="/dashboard/contact-messages" />}
												icon={<ForumOutlinedIcon />}>
												Contact Messages
											</MenuItem>
											<MenuItem
												component={<Link to="/dashboard/allUsers" />}
												icon={<PeopleAltOutlinedIcon />}>
												All Users
											</MenuItem>
										</>
									) : (
										<>
											<MenuItem
												component={<Link to="/dashboard/userProfile" />}
												icon={<AccountBoxOutlinedIcon />}>
												Profile
											</MenuItem>
											<MenuItem component={<Link to="/dashboard" />} icon={<HistoryOutlinedIcon />}>
												Order History
											</MenuItem>
										</>
									)}
								</Menu>
							</div>

							<div className="">
								<Menu>
									<button
										onClick={() => {
											logOut();
											localStorage.removeItem('minion-commerce-token');
										}}
										className="inline-block rounded bg-indigo-600 px-8 py-3 w-full text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
										<span className="flex items-center justify-center gap-1">
											<LogoutIcon fontSize="medium" />
											<span className="text-lg">Logout</span>
										</span>
									</button>
								</Menu>
							</div>
						</aside>
					</Sidebar>
				</div>
				<div className="flex-grow">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
