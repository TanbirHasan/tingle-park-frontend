import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopNavbar from '../components/TopNavbar/TopNavbar';

const Main = () => {
	return (
		<div>
			<TopNavbar />
			<Navbar />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</div>
	);
};

export default Main;
