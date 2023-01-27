import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import user from '../../../assets/user.jpg';

const Reviews = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const [ratings, setRatings] = useState(3);

	const handleReview = (data) => {
		const { name, email, review } = data;
		const userReview = {
			name,
			email,
			review,
			ratings,
		};
		alert(`${name} ${email} ${review} ${ratings}`);
		reset()
	};

	return (
		<div className="mt-10 flex  flex-col lg:flex-row text-center lg:text-left gap-5">
			<div className="flex  flex-col lg:flex-row gap-5 lg:w-[50%]">
				<div>
					<img src={user} alt="" className="w-[80px] lg:h-[45px] mt-2 mx-auto" />
				</div>
				<div className="">
					<div>
						<h1 className="text-[#3d464d] font-medium mb-2">
							John Doe - <span className="text-[#3d464d] text-[12.8px] italic">01 Jan 2045</span>
						</h1>
					</div>
					<div className="flex items-center mb-2 gap-1">
						<AiFillStar className="text-[#FFD333] font-extrabold text-xl " />
						<AiFillStar className="text-[#FFD333] font-extrabold text-xl " />
						<AiFillStar className="text-[#FFD333] font-extrabold text-xl " />
						<AiFillStar className="text-[#FFD333] font-extrabold text-xl " />
						<AiOutlineStar className="text-[#FFD333] font-extrabold text-xl " />
					</div>
					<div>
						<p className="text-[#6c757d]">
							Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at.
							Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
						</p>
					</div>
				</div>
			</div>

			<div>
				<h1 className="text-[#3d464d] text-[28.5px] font-medium mb-5">Leave a review</h1>
				<p className="text-[#6c757d]">
					Your email address will not be published. Required fields are marked *
				</p>
				{/* <div className="flex items-center mt-5 gap-1">
					<div className="text-[#6c757d] text-lg font-medium">Your Rating * :</div>
					<AiOutlineStar className="text-[#FFD333] text-[24px] " />
					<AiOutlineStar className="text-[#FFD333] text-[24px] " />
					<AiOutlineStar className="text-[#FFD333] text-[24px] " />
					<AiOutlineStar className="text-[#FFD333] text-[24px] " />
					<AiOutlineStar className="text-[#FFD333] text-[24px] " />
				</div> */}

				<form onSubmit={handleSubmit(handleReview)}>
					<div className="flex items-center gap-2 mt-5">
						<div className="text-[#6c757d] text-lg font-medium">Your Rating * :</div>
						<Rating
							name="simple-controlled"
							value={ratings}
							size="large"
							onChange={(event, newValue) => {
								setRatings(newValue);
							}}
						/>
					</div>

					<div className="my-5">
						<label
							htmlFor="review"
							className={`text-[#6c757d]    ${errors.review && 'text-red-600'}`}>
							Your Review *
						</label>
						<textarea
							{...register('review', {
								required: 'Review is required',
								minLength: {
									value: 10,
									message: 'Review must have at least 10 characters',
								},
							})}
							cols="30"
							rows="5"
							className={`w-full mt-3 focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
								errors.review && 'focus:border-red-600'
							}`}></textarea>
						{errors.review && <p className="text-red-600 text-right">{errors.review?.message}</p>}
					</div>
					<div className="mt-5">
						<label htmlFor="name" className={`text-[#6c757d]    ${errors.name && 'text-red-600'}`}>
							Your Name *
						</label>
						<input
							type="text"
							{...register('name', { required: 'Name is required' })}
							className={`w-full mt-3 focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
								errors.name && 'focus:border-red-600'
							}`}
						/>
						{/* {errors.name && <p className="text-red-600 text-right">{errors.name?.message}</p>} */}
					</div>
					<div className="my-5">
						<label htmlFor="name" className={`text-[#6c757d]    ${errors.email && 'text-red-600'}`}>
							Your Email *
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
							className={`w-full mt-3 focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
								errors.email && 'focus:border-red-600'
							} `}
						/>
						{/* {errors.email && <p className="text-red-600 text-right">{errors.email?.message}</p>} */}
					</div>
					<button type="submit" className="bg-[#ffd333] px-10 py-2 text-[#3d464d] font-medium">
						Leave your Review
					</button>
				</form>
			</div>
		</div>
	);
};

export default Reviews;
