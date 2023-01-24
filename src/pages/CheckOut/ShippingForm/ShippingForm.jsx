import React from 'react';
import { useForm } from 'react-hook-form';

const ShippingForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	return (
		<div>
			<div className="flex items-center gap-2 mt-10">
				<h1 className="uppercase text-xl font-semibold my-4">Shipping Address</h1>
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
							placeholder="123 street"
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
							placeholder="123 street"
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
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#6a7075]  border-[#D4D9DF] mt-2 ">
							<option selected value="United States">
								United States
							</option>
							<option value="Albania">Albania</option>
							<option value="Oman">Oman</option>
							<option value="UAE">UAE</option>
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
			</div>
		</div>
	);
};

export default ShippingForm;
