import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

import p1 from '../../../assets/product-1.jpg';
import p2 from '../../../assets/product-2.jpg';
import p3 from '../../../assets/product-3.jpg';
import p4 from '../../../assets/product-4.jpg';
import p5 from '../../../assets/product-5.jpg';
import p6 from '../../../assets/product-6.jpg';
import p7 from '../../../assets/product-7.jpg';
import p8 from '../../../assets/product-8.jpg';
import p9 from '../../../assets/product-9.jpg';

const ShopDetails = () => {
	return (
		<div className="w-[90%] mx-auto">
			<div className="my-10">
				<nav className="w-full h-[48px] flex px-4 bg-white ">
					<ol className="flex  space-x-2 ">
						<li className="flex items-center space-x-1">
							<Link
								to={'/'}
								className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
								Home
							</Link>
						</li>
						<li className="flex items-center space-x-1">
							<span className="dark:text-gray-400">/</span>
							<Link
								to={'/shop'}
								className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
								Shop
							</Link>
						</li>
						<li className="flex items-center space-x-1">
							<span className="dark:text-gray-400">/</span>
							<Link className="flex items-center px-1 capitalize text-[#6c757d] cursor-default">
								Shop Detail
							</Link>
						</li>
					</ol>
				</nav>
			</div>

			<div>
				<div className="bg-white w-[50%]  my-10">
					<Swiper
						slidesPerView={1}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						navigation={true}
						modules={[Autoplay, Navigation]}
						className="mySwiper1">
						<SwiperSlide>
							<img src={p1} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p2} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p3} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p4} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p5} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p6} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p7} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p8} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={p9} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ShopDetails;
