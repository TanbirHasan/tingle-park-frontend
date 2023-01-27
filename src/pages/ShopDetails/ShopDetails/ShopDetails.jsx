import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

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

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductCard from '../../../components/ProductCard/ProductCard';
import SizesAndColor from '../../../components/SizesAndColor/SizesAndColor';
import { addItemsToCart, incrementCart } from '../../../features/CartSlice';
import { fetchProducts } from '../../../features/ProductSlice';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductInformation from '../ProductInformation/ProductInformation';
import Reviews from '../Reviews/Reviews';
import { Rating } from '@mui/material';

const ShopDetails = () => {
	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();
	const location = useLocation();
	const { id, title, picture, sizes_color, quantity, price, ratings } = location.state;

	const [addToCart, setAddedToCart] = useState(false);

	let product = { id, title, picture, sizes_color, quantity, price, ratings };
	const remainingProducts = products.filter((p) => p.id !== id);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const handleAddToCart = () => {
		dispatch(incrementCart());
		dispatch(addItemsToCart(product));
		setAddedToCart(!addToCart);
	};

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
						speed={1200}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						navigation={true}
						modules={[Autoplay, Navigation]}
						className="mySwiper1">
						<SwiperSlide>
							<img src={picture} alt="" className=" w-[560px] mx-auto" />
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="bg-white w-full p-10">
					<h1 className="text-[#3d464d] text-3xl font-bold">{title}</h1>

					<div className="flex items-center  gap-1">
						<div className="flex justify-center mt-2 items-center">
							<Rating
								name="half-rating-read"
								size="small"
								value={ratings}
								precision={0.5}
								readOnly
							/>
							<span className="ml-1 mb-1 text-[#6c757d]">(99) reviews</span>
						</div>
					</div>

					<h1 className="text-[#3d464d] text-3xl font-bold my-4">$ {price}</h1>

					<p className="mt-4 text-[#6c757d]">
						Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita
						ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy
					</p>

					{sizes_color ? (
						<>
							<SizesAndColor
								heading={'Sizes'}
								i1={'XS'}
								i2={'S'}
								i3={'M'}
								i4={'L'}
								i5={'XL'}
								commonName={'sizes'}
							/>

							<div className="mb-5">
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
						</>
					) : (
						<>
							<div className="my-7">
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
						</>
					)}

					<div className="flex flex-col lg:flex-row items-center gap-10">
						{/* <div className="flex items-center">
							<button
								type="button"
								className="inline-flex items-center justify-center w-[40px] h-[41px] text-sm  border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
								<AiOutlineMinus className="text-2xl font-extrabold" />
							</button>

							<button
								type="button"
								className="inline-flex items-center justify-center w-[50px] h-[41px] text-xl  font-semibold text-center bg-[#F5F5F5] focus:outline-0 focus:ring-transparent border-0">
								{quantity}
							</button>

							<button
								type="button"
								className="inline-flex items-center justify-center w-[40px] h-[41px] text-sm font-semibold border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
								<AiOutlinePlus className="text-2xl font-extrabold" />
							</button>
						</div> */}

						<div>
							<button
								type="button"
								disabled={addToCart ? true : false}
								onClick={handleAddToCart}
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
						<ProductDescription product={product} />
					</TabPanel>
					<TabPanel>
						<ProductInformation product={product} />
					</TabPanel>
					<TabPanel>
						<Reviews />
					</TabPanel>
				</Tabs>
			</div>

			<div className="my-20">
				<div className="flex items-center gap-5 my-5">
					<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold  ">
						You may also like
					</h1>
					<div className="flex flex-grow flex-wrap">
						<span className="w-full  border_style "></span>
					</div>
				</div>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					speed={1200}
					autoHeight={true}
					breakpoints={{
						200: {
							slidesPerView: 1,
						},

						640: {
							slidesPerView: 2,
						},

						768: {
							slidesPerView: 4,
						},
					}}
					loop={true}
					// loopFillGroupWithBlank={true}

					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper_Details">
					{isLoading && (
						<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
					)}
					{remainingProducts.map((product) => (
						<SwiperSlide key={product.id}>
							{' '}
							<ProductCard product={product} />{' '}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ShopDetails;
