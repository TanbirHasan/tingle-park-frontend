import React from 'react';
import './offers.css';
import offer1 from '../../../assets/offer-1.jpg';
import offer2 from '../../../assets/offer-2.jpg';

const Offers = () => {
	return (
		<div className="my-20">
			<div className="flex flex-col lg:flex-row justify-between gap-10">
				<div className="img-hover-zoom img-hover-zoom--zoom-n-rotate relative">
					<div className="box">
						<img src={offer1} alt="offer" className="offer-image h-[300px]" />
					</div>
					<div className="text-center text-white space-y-2 absolute font-bold top-[30%] left-[28%] md:top-[30%] md:left-[37%]">
						<h1 className="text-xl">Save 20% </h1>
						<div>
							<h1 className="text-3xl">Special Offer </h1>
							<button className="mt-5 w-[120px] h-10 text-black bg-[#FFCB0D]  ">Shop Now</button>
						</div>
					</div>
				</div>
				<div className="img-hover-zoom img-hover-zoom--zoom-n-rotate relative">
					<div className="box">
						<img src={offer2} alt="offer" className="offer-image h-[300px]" />
					</div>
					<div className="text-center text-white space-y-2 absolute font-bold top-[83px] left-[28%] md:top-[30%] md:left-[37%]">
						<h1 className="text-xl">Save 20% </h1>
						<div>
							<h1 className="text-3xl">Special Offer </h1>
							<button className="mt-5 w-[120px] h-10 text-black bg-[#FFCB0D]  ">Shop Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offers;
