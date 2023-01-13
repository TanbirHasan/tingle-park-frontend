import React from 'react';
import './banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper';

import offer1 from '../../../assets/offer-1.jpg';
import offer2 from '../../../assets/offer-2.jpg';

const Banner = () => {
	return (
		<div className="mb-10 lg:mt-10 flex flex-col lg:flex-row gap-10">
			<div className="lg:w-[65%]">
				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper">
					<SwiperSlide>
						<div className="carousel-common-style h-[450px]  bg-cover flex justify-center items-center text-white image-1 flex-col">
							<div className="relative text-center space-y-8">
								<h1 className="text-5xl font-bold  ">Men Fashion</h1>
								<p className="md:px-20">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, consequatur! Lorem
									ipsum dolor sit amet consectetur, adipisicing elit. Non, consequatur!
								</p>
								<button className="mt-5 w-[120px] h-10 border-2 border-white bg-transparent hover:bg-white hover:text-black duration-500">
									Shop Now
								</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="carousel-common-style h-[450px] bg-cover flex justify-center items-center text-white image-2 flex-col">
							<div className="relative text-center space-y-8">
								<h1 className="text-5xl font-bold  ">Men Fashion</h1>
								<p className=" md:px-20">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, consequatur! Lorem
									ipsum dolor sit amet consectetur, adipisicing elit. Non, consequatur!
								</p>
								<button className="mt-5 w-[120px] h-10 border-2 border-white bg-transparent hover:bg-white hover:text-black duration-500">
									Shop Now
								</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="carousel-common-style h-[450px] bg-cover flex justify-center items-center text-white image-3 flex-col">
							<div className="relative text-center space-y-8">
								<h1 className="text-5xl font-bold relative ">Men Fashion</h1>
								<p className="md:px-20">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, consequatur! Lorem
									ipsum dolor sit amet consectetur, adipisicing elit. Non, consequatur!
								</p>
								<button className="mt-5 w-[120px] h-10 border-2 border-white bg-transparent hover:bg-white hover:text-black duration-500">
									Shop Now
								</button>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="w-full space-y-10 mt-1">
				
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),url(${offer1})`,
					}}
					className="bg-no-repeat bg-cover h-[400px] lg:h-[200px] flex flex-col justify-center items-center ">
					<div className="text-center space-y-4 text-white font-bold">
						<h1 className="text-xl">Save 20% </h1>
						<h1 className="text-4xl">Special Offer </h1>
						<button className="mt-5 w-[120px] h-10 text-black bg-[#FFCB0D]  ">Shop Now</button>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),url(${offer2})`,
					}}
					className="bg-no-repeat bg-cover h-[400px] lg:h-[200px] flex flex-col justify-center items-center ">
					<div className="text-center space-y-4 text-white font-bold">
						<h1 className="text-xl">Save 20% </h1>
						<h1 className="text-4xl">Special Offer </h1>
						<button className="mt-5 w-[120px] h-10 text-black bg-[#FFCB0D]  ">Shop Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
