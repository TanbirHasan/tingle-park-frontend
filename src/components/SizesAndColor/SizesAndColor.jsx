import React from 'react';

const SizesAndColor = ({ heading, i1, i2, i3, i4, i5, commonName }) => {
	return (
		<div className="mt-5  flex flex-wrap items-center gap-5">
			<h1 className="text-[#3d464d] font-bold">{heading}:</h1>
			<div className="flex items-center text-[#6c757d]">
				<input
					type="radio"
					name={commonName}
					className="appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent cursor-pointer"
				/>
				<label htmlFor="payment-option-1" className="ml-2">
					{i1}
				</label>
			</div>
			<div className="flex items-center text-[#6c757d]">
				<input
					type="radio"
					name={commonName}
					className="appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent cursor-pointer"
				/>
				<label htmlFor="payment-option-1" className="ml-2">
					{i2}
				</label>
			</div>
			<div className="flex items-center text-[#6c757d]">
				<input
					type="radio"
					name={commonName}
					className="appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent cursor-pointer"
				/>
				<label htmlFor="payment-option-1" className="ml-2">
					{i3}
				</label>
			</div>
			<div className="flex items-center text-[#6c757d]">
				<input
					type="radio"
					name={commonName}
					className="appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent cursor-pointer"
				/>
				<label htmlFor="payment-option-1" className="ml-2">
					{i4}
				</label>
			</div>
			<div className="flex items-center text-[#6c757d]">
				<input
					type="radio"
					name={commonName}
					className="appearance-none text-[#ffd333] focus:ring-0 focus:ring-transparent cursor-pointer"
				/>
				<label htmlFor="payment-option-1" className="ml-2">
					{i5}
				</label>
			</div>
		</div>
	);
};

export default SizesAndColor;
