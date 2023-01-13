import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Customers from '../Customers/Customers';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Offers from '../Offers/Offers';
import RecentProducts from '../RecentProducts/RecentProducts';
import Services from '../Services/Services';

const HomePage = () => {
	return (
		<div className="lg:w-[90%] mx-auto">
			<Banner />
			<Services />
			<Categories />
			<FeaturedProducts />
			<Offers />
			<RecentProducts />
			<Customers />
		</div>
	);
};

export default HomePage;
