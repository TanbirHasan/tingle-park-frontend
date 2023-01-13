import React from 'react';
import { TiTick } from 'react-icons/ti';
import { FaPhone } from 'react-icons/fa';
import { TbTruckDelivery,TbArrowsRightLeft } from 'react-icons/tb';

const Services = () => {
	return (
		<div className=" my-20 flex flex-col md:flex-row justify-center gap-5 items-center flex-wrap">
			<div className='flex items-center px-4 w-[300px] h-[100px] shadow-2xl  py-5'>
				<TiTick className='text-6xl text-[#FFCB0D]' />
				<h1 className='text-2xl font-bold'>Quality Product</h1>
			</div>
			<div className='flex items-center px-4 w-[300px] h-[100px] gap-4 shadow-2xl  py-5'>
				<TbTruckDelivery className='text-6xl text-[#FFCB0D]' />
				<h1 className='text-2xl font-bold'>Free Shipping</h1>
			</div>
			<div className='flex items-center px-4 w-[300px] h-[100px] gap-4 shadow-2xl  py-5'>
				<TbArrowsRightLeft className='text-6xl text-[#FFCB0D]' />
				<h1 className='text-2xl font-bold'>14-Day Return</h1>
			</div>
			<div className='flex items-center px-4 w-[300px] h-[100px] shadow-2xl gap-4 py-5'>
				<FaPhone className='text-5xl text-[#FFCB0D]' />
				<h1 className='text-2xl font-bold'>24/7 Support</h1>
			</div>
		</div>
	);
};

export default Services;
