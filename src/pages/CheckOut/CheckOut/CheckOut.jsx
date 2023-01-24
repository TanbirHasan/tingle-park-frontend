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

			<div className="my-10 flex flex-col lg:flex-row gap-10">
				<div className="lg:w-[65%] mb-20">
					<div className="flex items-center gap-2">
						<h1 className="uppercase text-xl font-semibold my-4">Billing Address</h1>
						<div className="flex flex-grow flex-wrap">
							<span className="w-full  border_style "></span>
						</div>
					</div>

					<div className="bg-white py-10 px-10">
						<form className=" grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
							<div>
								<label htmlFor="firstName" className="text-[#6c757d]">
									First Name
								</label>
								<input
									type="text"
									{...register('firstName', { required: 'First Name is required' })}
									placeholder="John"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.firstName && <p className="text-red-600">{errors.firstName?.message}</p>}
							</div>
							<div>
								<label htmlFor="lastName" className="text-[#6c757d]">
									Last Name
								</label>
								<input
									type="text"
									{...register('lastName', { required: 'Last Name is required' })}
									placeholder="Smith"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.lastName && <p className="text-red-600">{errors.lastName?.message}</p>}
							</div>
							<div>
								<label htmlFor="email" className="text-[#6c757d]">
									Email
								</label>
								<input
									type="text"
									{...register('email', {
										required: 'Email Address is required',
										pattern: {
											value: /.+@.+\..+/i,
											message: 'Please enter a valid email address',
										},
									})}
									placeholder="example@example.com"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.email && <p className="text-red-600">{errors.email?.message}</p>}
							</div>
							<div>
								<label htmlFor="mobile" className="text-[#6c757d]">
									Mobile No
								</label>
								<input
									type="text"
									{...register('mobile', {
										required: 'Mobile Number is required',
									})}
									placeholder="+880 123456"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.mobile && <p className="text-red-600">{errors.mobile?.message}</p>}
							</div>
							<div>
								<label htmlFor="address1" className="text-[#6c757d]">
									Address Line 1
								</label>
								<input
									type="text"
									{...register('address1', {
										required: 'Address 1 is required',
									})}
									placeholder="+880 123456"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.address1 && <p className="text-red-600">{errors.address1?.message}</p>}
							</div>
							<div>
								<label htmlFor="address2" className="text-[#6c757d]">
									Address Line 2
								</label>
								<input
									type="text"
									{...register('address2', {
										required: 'Address 2 is required',
									})}
									placeholder="+880 123456"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.address2 && <p className="text-red-600">{errors.address2?.message}</p>}
							</div>

							<div>
								<label htmlFor="country" className="text-[#6c757d]">
									Country
								</label>
								<select
									{...register('country', {
										required: 'Country is required',
									})}
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
									name=""
									id="">
									<option value="">United States</option>
									<option value="">Albania</option>
									<option value="">Oman</option>
									<option value="">UAE</option>
								</select>
								{errors.country && <p className="text-red-600">{errors.country?.message}</p>}
							</div>
							<div>
								<label htmlFor="city" className="text-[#6c757d]">
									City
								</label>
								<input
									type="text"
									{...register('city', {
										required: 'City is required',
									})}
									placeholder="New York"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.city && <p className="text-red-600">{errors.city?.message}</p>}
							</div>
							<div>
								<label htmlFor="state" className="text-[#6c757d]">
									State
								</label>
								<input
									type="text"
									{...register('state', {
										required: 'State is required',
									})}
									placeholder="New York"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.state && <p className="text-red-600">{errors.state?.message}</p>}
							</div>
							<div>
								<label htmlFor="zip" className="text-[#6c757d]">
									ZIP
								</label>
								<input
									type="text"
									{...register('zip', {
										required: 'ZIP is required',
									})}
									placeholder="123"
									className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
								/>
								{errors.zip && <p className="text-red-600">{errors.zip?.message}</p>}
							</div>
						</form>
						<div className="mt-5 space-y-3">
							<div className="flex items-center">
								<input
									type="checkbox"
									className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
								/>
								<p className="ml-2">Create an account</p>
							</div>
							<div className="flex items-center">
								<input
									type="checkbox"
									className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
								/>
								<p className="ml-2">Ship to different address</p>
							</div>
						</div>
					</div>
				</div>

				<div className="lg:w-[35%]">
					<div>
						<div className="flex items-center gap-2">
							<h1 className="uppercase text-xl font-semibold my-4 text-[#3d464d]">Order Total</h1>
							<div className="flex flex-grow flex-wrap">
								<span className="w-full  border_style "></span>
							</div>
						</div>

						<div className="bg-white py-10 px-5 space-y-5 text-[#3d464d] font-semibold">
							<div className="flex justify-between">
								<h1>Sub total</h1>
								<p>{/* $<span>{total * 150}</span> */}</p>
							</div>
							<div className="flex justify-between">
								<h1>Shipping</h1>
								<p>$10</p>
							</div>
							<hr />

							<div>
								<div className="flex justify-between">
									<h1>Total</h1>
									<p>{/* $<span>{total * 150 + 10}</span> */}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-10 ">
						<div className="flex items-center gap-2">
							<h1 className="uppercase text-xl font-semibold my-4 text-[#3d464d]">Order Total</h1>
							<div className="flex flex-grow flex-wrap">
								<span className="w-full  border_style "></span>
							</div>
						</div>

						<div className="mt-5 space-y-3 bg-white p-10 text-[#6c757d] text-lg">
							<div className="flex items-center">
								<input
									type="radio"
									name="payment"
									className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
								/>
								<label htmlFor="payment-option-1" className="ml-2">
									Paypal
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="radio"
									name="payment"
									className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
								/>
								<label htmlFor="payment-option-2" className="ml-2">
									Direct Check
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="radio"
									name="payment"
									className=" appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent"
								/>
								<label htmlFor="payment-option-3" className="ml-2">
									Bank Transfer
								</label>
							</div>
							<div>
								<button
									type="submit"
									className="bg-[#FFD333] text-black hover:bg-[#FFCB0D] duration-500 py-3 px-7 w-full mt-4">
									Proceed To Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
