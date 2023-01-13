import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

import logo1 from '../../../assets/vendor-1.jpg';
import logo2 from '../../../assets/vendor-2.jpg';
import logo3 from '../../../assets/vendor-3.jpg';
import logo4 from '../../../assets/vendor-4.jpg';
import logo5 from '../../../assets/vendor-5.jpg';
import logo6 from '../../../assets/vendor-6.jpg';
import logo7 from '../../../assets/vendor-7.jpg';
import logo8 from '../../../assets/vendor-8.jpg';

const Customers = () => {
	return (
		<div className="my-20">
			<Swiper
				breakpoints={{
					
					200: {
						slidesPerView: 1,
					},
					340: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 4,
					},
					
					768: {
						slidesPerView: 6,
					},
				}}
				slidesPerView={6}
				spaceBetween={30}
				slidesPerGroup={2}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper lg:h-full">
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo1} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo2} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo3} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo4} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo5} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo6} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo7} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
				<SwiperSlide className="bg-white cursor-grab">
					<img src={logo8} alt="" className=" flex items-center lg:w-[160px]  mx-auto" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Customers;
