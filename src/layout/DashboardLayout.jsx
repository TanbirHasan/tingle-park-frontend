import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useContext } from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import { AuthContext } from '../Contexts/UserAuthProvider';

const DashboardLayout = () => {
	const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
	const { user, logOut } = useContext(AuthContext);

	return (
		<div>
			<TopNavbar />
			{/* <Navbar /> */}

			<div className="flex">
				<div className="">
					<Sidebar
						backgroundColor='#ffff'
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
							</div>

							<div className="flex flex-col justify-between flex-1 mt-6 mb-20">
								<Menu>
									<MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
									<MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
									<MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
									<MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
									<MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
									<MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
								</Menu>
							</div>

							<div className="">
								<Menu>
									<button
										onClick={() => logOut()}
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