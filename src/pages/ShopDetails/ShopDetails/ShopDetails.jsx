import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import 'react-tabs/style/react-tabs.css';

import {
	AiFillStar,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineStar,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { ImPinterest } from 'react-icons/im';

import p1 from '../../../assets/product-1.jpg';
import p2 from '../../../assets/product-2.jpg';
import p3 from '../../../assets/product-3.jpg';
import p4 from '../../../assets/product-4.jpg';
import p5 from '../../../assets/product-5.jpg';
import p6 from '../../../assets/product-6.jpg';
import p7 from '../../../assets/product-7.jpg';
import p8 from '../../../assets/product-8.jpg';
import p9 from '../../../assets/product-9.jpg';
import SizesAndColor from '../../../components/SizesAndColor/SizesAndColor';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductDescription from '../ProductDescription/ProductDescription';

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

			<div className="my-10 flex flex-col lg:flex-row gap-10">
				<div className="bg-white lg:w-[40%] ">
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

				<div className="bg-white w-full p-10">
					<h1 className="text-[#3d464d] text-3xl font-bold">Product Name Goes Here</h1>

					<div className="flex items-center mt-5 gap-1">
						<AiFillStar className="text-[#FFD333] " />
						<AiFillStar className="text-[#FFD333] " />
						<AiFillStar className="text-[#FFD333] " />
						<AiFillStar className="text-[#FFD333] " />
						<AiOutlineStar className="text-[#FFD333] " />
						<div className="ml-2 text-[#6c757d] text-[12.8px]">(99 reviews)</div>
					</div>
					<h1 className="text-[#3d464d] text-3xl font-bold my-4">$150.00</h1>

					<p className="mt-4 text-[#6c757d]">
						Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita
						ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy
					</p>

					<SizesAndColor
						heading={'Sizes'}
						i1={'XS'}
						i2={'S'}
						i3={'M'}
						i4={'L'}
						i5={'XL'}
						commonName={'sizes'}
					/>

					<div className="mb-7">
						<SizesAndColor
							heading={'Colors'}
							i1={'Black'}
							i2={'White'}
							i3={'Red'}
							i4={'Blue'}
							i5={'Green'}
							commonName={'colors'}
						/>
					</div>

					<div className="flex flex-col lg:flex-row items-center gap-10">
						<div className="flex items-center">
							<button
								type="button"
								className="inline-flex items-center justify-center w-[40px] h-[41px] text-sm  border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
								<AiOutlineMinus className="text-2xl font-extrabold" />
							</button>

							<button
								type="button"
								className="inline-flex items-center justify-center w-[50px] h-[41px] text-xl  font-semibold text-center bg-[#F5F5F5] focus:outline-0 focus:ring-transparent border-0">
								0
							</button>

							<button
								type="button"
								className="inline-flex items-center justify-center w-[40px] h-[41px] text-sm font-semibold border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
								<AiOutlinePlus className="text-2xl font-extrabold" />
							</button>
						</div>

						<div>
							<button
								type="button"
								className="inline-flex items-center justify-center w-[200px] h-[41px] text-xl  font-semibold text-center  border-0 bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500">
								<BsFillCartFill /> <span className="ml-2">Add to cart</span>
							</button>
						</div>
					</div>

					<div className="mt-5 flex items-center gap-4 ">
						<h1 className="text-[#3d464d] font-bold">Share on:</h1>
						<div className="flex items-center gap-4 text-[#1b1f22]">
							<FaFacebookF /> <AiOutlineTwitter /> <FaLinkedinIn /> <ImPinterest />
						</div>
					</div>
				</div>
			</div>

			<div className="my-10 bg-white p-10">
				<Tabs>
					<TabList>
						<Tab>Description</Tab>
						<Tab>Information</Tab>
						<Tab>Reviews (0)</Tab>
					</TabList>

					<TabPanel>
						<ProductDescription />
					</TabPanel>
					<TabPanel>
						<h2>Any content 2</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 2</h2>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default ShopDetails;
