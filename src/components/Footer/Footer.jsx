import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineRight,AiOutlineTwitter,AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import payments from '../../assets/payments.png'

const Footer = () => {
	return (
		<div className="bg-[#3D464D] pt-[6%] pb-[2%] px-[4%] text-white">
			<div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5 col-span-12 place-content-center">
				<div className="col-span-full md:col-span-1 lg:col-span-2 text-center md:text-left">
					<p className="font-medium text-xl ">GET IN TOUCH</p>
					<ul className="mt-2 space-y-2">
						<li>
							<p className="text-md my-3">
								No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed
								dolor. Rebum tempor no vero est magna amet no
							</p>
						</li>
						<li className="flex justify-center md:justify-start items-center gap-2">
							<MdLocationOn className="text-xl text-[#FFD333]" />
							<p className="text-lg">123 Street, New York, USA</p>
						</li>
						<li className="flex justify-center md:justify-start items-center gap-2">
							<MdEmail className="text-xl text-[#FFD333]" />
							<p className="text-lg">info@example.com</p>
						</li>
						<li className="flex justify-center md:justify-start items-center gap-2">
							<BsFillTelephoneFill className="text-xl text-[#FFD333]" />
							<p className="text-lg">+012 345 67890</p>
						</li>
					</ul>
				</div>
				<div className="lg:col-span-1">
					<p className="font-medium text-xl ">QUICK SHOP</p>
					<ul className="mt-2 space-y-2">
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Home</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Our Shop</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Shop Detail</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Shopping Cart</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Checkout</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="lg:col-span-1">
					<p className="font-medium text-xl ">QUICK SHOP</p>
					<ul className="mt-2 space-y-2">
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Home</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Our Shop</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Shop Detail</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Shopping Cart</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Checkout</Link>
						</li>
						<li className="flex items-center gap-2 hover:text-[#CACFCF] hover:underline">
							<AiOutlineRight />
							<Link className="">Contact Us</Link>
						</li>
					</ul>
				</div>

				<div className="col-span-full lg:col-span-1 text-center lg:text-left">
					<p className="font-medium text-xl ">NEWSLETTER</p>
					<p className="mt-4 text-md ">
						Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
					</p>
					<form className="flex md:flex-row flex-row mt-4  py-2 justify-center lg:justify-start text-black">
						<input
							placeholder="Your Email Address"
							required
							type="email"
							className="lg:w-[180px] py-2 px-3 focus:ring-0"
						/>
						<button type="submit" className="bg-yellow-400 text-black px-3">
							Sign up
						</button>
					</form>

					<div>
						<p className="font-medium text-md mt-3 uppercase ">Follow Us</p>

						<div className="flex gap-2 items-center justify-center lg:justify-start my-5">
							<div className="bg-[#FFD333] p-3 cursor-pointer hover:bg-[#FFCB0D] duration-500">
								<AiOutlineTwitter className="text-[#3D464D]" />
							</div>
							<div className="bg-[#FFD333] p-3 cursor-pointer hover:bg-[#FFCB0D] duration-500">
								<FaFacebookF className="text-[#3D464D]" />
							</div>
							<div className="bg-[#FFD333] p-3 cursor-pointer hover:bg-[#FFCB0D] duration-500">
								<FaLinkedinIn className="text-[#3D464D]" />
							</div>
							<div className="bg-[#FFD333] p-3 cursor-pointer hover:bg-[#FFCB0D] duration-500">
								<AiFillInstagram className="text-[#3D464D]" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col-reverse items-center lg:justify-between pt-5 mt-10  border-t border-gray-500 lg:flex-row">
				<p className="text-sm mt-3 text-center md:text-left">© Copyright 2020 Lorem Inc. All rights reserved.</p>
				<img src={payments} alt="" className='lg:w-[15%] lg:h-[100%] mt-10 px-10 md:mt-0 md:px-0' />
			</div>
		</div>
	);
};

export default Footer;
