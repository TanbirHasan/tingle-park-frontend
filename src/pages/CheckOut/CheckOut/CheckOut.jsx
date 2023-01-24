import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CheckOut = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

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
								Checkout
							</Link>
						</li>
					</ol>
				</nav>
			</div>

			<div>
				<div className='w-[65%] mb-20'>
					<div className="flex items-center gap-2">
						<h1 className="uppercase text-xl font-semibold my-4">Billing Address</h1>
						<div className="flex flex-grow flex-wrap">
							<span className="w-full  border_style "></span>
						</div>
					</div>

					<div>
						<form className="bg-white py-10 px-10 grid grid-cols-2 gap-x-10 gap-y-5">
							<div>
								<label htmlFor="firstName" className="text-[#6c757d]">
									First Name
								</label>
								<input
									type="text"
									{...register('name', { required: 'Your Name is required' })}
									placeholder="Your Name"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] mt-2 "
								/>
							</div>
							<div>
								<label htmlFor="firstName" className="text-[#6c757d]">
									Last Name
								</label>
								<input
									type="text"
									{...register('name', { required: 'Your Name is required' })}
									placeholder="Your Name"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] mt-2 "
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
