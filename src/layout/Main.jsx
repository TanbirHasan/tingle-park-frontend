import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</div>
	);
};

export default Main;
