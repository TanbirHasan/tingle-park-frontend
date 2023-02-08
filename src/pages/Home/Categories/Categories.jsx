import React from 'react';
import cat1 from '../../../assets/cat-1.jpg';
import cat2 from '../../../assets/cat-2.jpg';
import cat3 from '../../../assets/cat-3.jpg';
import cat4 from '../../../assets/cat-4.jpg';
import CategoriesCard from './CategoriesCard';

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
			name: 'Home Decor',
			productAmount: 100,
			picture: cat3,
		},
		{
			name: 'Cosmetics',
			productAmount: 100,
			picture: cat4,
		},
		
	];

	return (
		<div className="my-40">
			<div className="flex items-center  gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold lg:text-left">
					Categories
				</h1>
				<div className="flex flex-grow flex-wrap">
					<span className="w-full  border_style "></span>
				</div>
			</div>

			<div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
				{categories.map((category, index) => (
					<CategoriesCard key={index} category={category} />
				))}
			</div>
		</div>
	);
};

export default Categories;
