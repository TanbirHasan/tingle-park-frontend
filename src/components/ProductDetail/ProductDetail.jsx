import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
	const location = useLocation();
	const { id, title, picture } = location.state;

	return (
		<div className="flex flex-col h-screen justify-center items-center">
			<div className='flex items-center gap-20'>
				<h1 className="text-8xl">{title}</h1>
				<img src={picture} alt="" className="w-[500px]" />
			</div>
		</div>
	);
};

export default ProductDetail;
