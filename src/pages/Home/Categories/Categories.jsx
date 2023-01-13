import React from 'react';
import CategoriesCard from './CategoriesCard';
import cat1 from '../../../assets/cat-1.jpg';
import cat2 from '../../../assets/cat-2.jpg';
import cat3 from '../../../assets/cat-3.jpg';
import cat4 from '../../../assets/cat-4.jpg';

const Categories = () => {
	const categories = [
		{
			name: 'Fashion',
			productAmount: 100,
			picture: cat1,
		},
		{
			name: 'Electronics',
			productAmount: 100,
			picture: cat2,
		},
		{
			name: 'Shoes',
			productAmount: 100,
			picture: cat3,
		},
		{
			name: 'Accessory',
			productAmount: 100,
			picture: cat4,
		},
		{
			name: 'Electronics',
			productAmount: 100,
			picture: cat2,
		},
		{
			name: 'Accessory',
			productAmount: 100,
			picture: cat4,
		},
		{
			name: 'Fashion',
			productAmount: 100,
			picture: cat1,
		},

		{
			name: 'Shoes',
			productAmount: 100,
			picture: cat3,
		},
	];

	return (
		<div className="my-20">
			<h2>All categories are here</h2>
			<div className="flex items-center gap-5">
				<h1 className="uppercase text-4xl text-[#3D464D] font-bold">Categories</h1>
				<div className="flex w-fit">
					<span className="w-6 h-1 border border-dashed bg-red-500"></span>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
				{categories.map((category, index) => (
					<CategoriesCard key={index} category={category} />
				))}
			</div>
		</div>
	);
};

export default Categories;
