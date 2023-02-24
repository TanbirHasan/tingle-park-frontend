import React from 'react';

const ProductDescription = ({ product }) => {
	return (
		<div className="mt-10">
			<h1 className="text-[#3d464d] text-3xl font-semibold ">{product.title}</h1>
			<div className="mt-3 text-[#6c757d]">
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default ProductDescription;
