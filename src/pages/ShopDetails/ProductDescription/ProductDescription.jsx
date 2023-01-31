import React from 'react';

const ProductDescription = ({product}) => {
	return (
		<div className="mt-10">
			<h1 className="text-[#3d464d] text-3xl font-semibold ">{ product.title }</h1>
			<div className="mt-3 text-[#6c757d]">
				<p>
					Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
					invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
					consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
					Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos
					dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
					nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
					tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
				</p>
				<p className='mt-3'>
					Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor
					consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita
					clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum.
					Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
				</p>
			</div>
		</div>
	);
};

export default ProductDescription;
