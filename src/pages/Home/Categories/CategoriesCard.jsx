import React from 'react';
import './categoriesCard.css';

const CategoriesCard = ({ category }) => {
	const { name, productAmount, picture } = category;

	return (
		<div className="container cursor-pointer lg:w-[300px] mx-auto shadow-xl hover:shadow-2xl group hover:bg-[#FFD333] duration-500">
			<div className="flex gap-10 lg:gap-0 items-center lg:flex-row  md:p-0 cursor-pointer group ">
				<div className='box'>
					<img
						className=" w-[100px] h-[100px] pb-2 md:pb-0  bg-transparent flex-none bg-cover"
						src={picture}
						alt=""
					/>
				</div>
				<div className=" rounded-b lg:rounded-b-none lg:rounded-r text-center md:text-left   lg:ml-10 space-y-2 pb-5 md:pb-0 ">
					<h2 className="text-[#3d464d] text-xl font-medium">{name}</h2>
					<p className="text-[#6c757d] text-md ">{productAmount} products </p>
				</div>
			</div>
		</div>
	);
};

export default CategoriesCard;
