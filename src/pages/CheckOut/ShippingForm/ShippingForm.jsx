import React from 'react';
import { useForm } from 'react-hook-form';

const ShippingForm = ({ showShipping }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	return (
		<div className={`${showShipping ? 'text-box' : ''}`}>
			<div className={`flex items-center gap-2 mt-10 `}>
				<h1 className="uppercase text-xl font-semibold my-4">Shipping Address</h1>
				<div className="flex flex-grow flex-wrap">
					<span className="w-full  border_style "></span>
				</div>
			</div>
			<div className="bg-white py-10 px-10">
				<form className=" grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
					<div>
						<label htmlFor="firstName1" className="text-[#6c757d]">
							First Name
						</label>
						<input
							type="text"
							{...register('firstName1', { required: 'First Name is required' })}
							placeholder="John"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.firstName1 && <p className="text-red-600">{errors.firstName1?.message}</p>}
					</div>
					<div>
						<label htmlFor="lastName1" className="text-[#6c757d]">
							Last Name
						</label>
						<input
							type="text"
							{...register('lastName1', { required: 'Last Name is required' })}
							placeholder="Smith"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.lastName1 && <p className="text-red-600">{errors.lastName1?.message}</p>}
					</div>
					<div>
						<label htmlFor="email1" className="text-[#6c757d]">
							Email
						</label>
						<input
							type="text"
							{...register('email1', {
								required: 'Email Address is required',
								pattern: {
									value: /.+@.+\..+/i,
									message: 'Please enter a valid email address',
								},
							})}
							placeholder="example@example.com"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.email1 && <p className="text-red-600">{errors.email1?.message}</p>}
					</div>
					<div>
						<label htmlFor="mobile1" className="text-[#6c757d]">
							Mobile No
						</label>
						<input
							type="text"
							{...register('mobile1', {
								required: 'Mobile Number is required',
							})}
							placeholder="+880 123456"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.mobile1 && <p className="text-red-600">{errors.mobile1?.message}</p>}
					</div>
					<div>
						<label htmlFor="address1Ship" className="text-[#6c757d]">
							Address Line 1
						</label>
						<input
							type="text"
							{...register('address1Ship', {
								required: 'Address 1 is required',
							})}
							placeholder="123 street"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.address1Ship && <p className="text-red-600">{errors.address1Ship?.message}</p>}
					</div>
					<div>
						<label htmlFor="address2Ship" className="text-[#6c757d]">
							Address Line 2
						</label>
						<input
							type="text"
							{...register('address2Ship', {
								required: 'Address 2 is required',
							})}
							placeholder="123 street"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.address2Ship && <p className="text-red-600">{errors.address2Ship?.message}</p>}
					</div>

					<div>
						<label htmlFor="country1" className="text-[#6c757d]">
							Country
						</label>
						<select
							{...register('country1', {
								required: 'Country is required',
							})}
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 ">
							<option selected value="United States">
								United States
							</option>
							<option value="Albania">Albania</option>
							<option value="Oman">Oman</option>
							<option value="UAE">UAE</option>
						</select>
						{errors.country1 && <p className="text-red-600">{errors.country1?.message}</p>}
					</div>
					<div>
						<label htmlFor="city1" className="text-[#6c757d]">
							City
						</label>
						<input
							type="text"
							{...register('city1', {
								required: 'City is required',
							})}
							placeholder="New York"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.city1 && <p className="text-red-600">{errors.city1?.message}</p>}
					</div>
					<div>
						<label htmlFor="state1" className="text-[#6c757d]">
							State
						</label>
						<input
							type="text"
							{...register('state1', {
								required: 'State is required',
							})}
							placeholder="New York"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.state1 && <p className="text-red-600">{errors.state1?.message}</p>}
					</div>
					<div>
						<label htmlFor="zip" className="text-[#6c757d]">
							ZIP
						</label>
						<input
							type="text"
							{...register('zip1', {
								required: 'ZIP is required',
							})}
							placeholder="123"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 "
						/>
						{errors.zip1 && <p className="text-red-600">{errors.zip1?.message}</p>}
					</div>
				</form>
			</div>
		</div>
	);
};

export default ShippingForm;
