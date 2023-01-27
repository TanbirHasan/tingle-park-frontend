import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlineSearch, AiOutlineStar } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { FiRefreshCcw } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemsToCart, incrementCart } from '../../features/CartSlice';
import { addItemsToWishList, incrementWishList } from '../../features/WishListSlice';
import './productCard.css';

const ProductCard = ({ product }) => {
	const { id, title, picture, ratings, price } = product;

	const [cartClicked, setCartClicked] = useState(false);
	const [wishListClicked, setWishListClicked] = useState(false);

	const dispatch = useDispatch();

	const handleCart = (product) => {
		dispatch(incrementCart());
		setCartClicked(true);
		dispatch(addItemsToCart(product));
	};

	const handleWishList = (product) => {
		dispatch(incrementWishList());
		setWishListClicked(true);
		dispatch(addItemsToWishList(product));
	};
	return (
		<div>
			<div className=" shadow-xl hover:shadow-2xl duration-500 box mx-auto bg-white">
				<div>
					<div className="box">
						<img
							alt="Art"
							src={picture}
							className="h-[40%] lg:h-[300px] w-full mx-auto card-image"
						/>
					</div>
					<div className="middle flex gap-3 ">
						<BsFillCartFill
							onClick={() => handleCart(product)}
							size={40}
							className={`border border-[#3D464D] cursor-pointer hover:text-[#FFD333] hover:bg-[#3D464D] text-[#3D464D] p-2 hover:duration-500 ${
								cartClicked ? 'bg-[#3D464D] text-[#FFCA07]' : ''
							} `}
						/>
						<AiOutlineHeart
							onClick={() => handleWishList(product)}
							size={40}
							className={`border border-[#3D464D] cursor-pointer hover:text-[#FFD333] hover:bg-[#3D464D] text-[#3D464D] p-2 hover:duration-500 ${
								wishListClicked ? 'bg-[#3D464D] text-[#FFCA07]' : ''
							}`}
						/>
						<FiRefreshCcw
							size={40}
							className="border border-[#3D464D] cursor-pointer hover:text-[#FFD333] hover:bg-[#3D464D] text-[#3D464D] p-2 hover:duration-500 "
						/>
						<AiOutlineSearch
							size={40}
							className="border border-[#3D464D] cursor-pointer hover:text-[#FFD333] hover:bg-[#3D464D] text-[#3D464D] p-2 hover:duration-500 "
						/>
					</div>
				</div>

				<div className="text-center px-4 py-5">
					<Link to={'/shop-details'} state={product}>
						<h3 className=" text-2xl md:text-xl font-bold cursor-pointer hover:text-[#FFD333] duration-300">
							{title}
						</h3>
					</Link>
					<div className="flex justify-center items-center gap-5 mt-2">
						<p className="text-[#3d464d] font-medium text-2xl md:text-xl">${price}</p>
						<p className="line-through text-[#6c757d] font-medium">$123</p>
					</div>
					{/* <div className="flex justify-center mt-2 items-center">
						<AiFillStar className="text-[#FFD333] text-lg" />
						<AiFillStar className="text-[#FFD333] text-lg" />
						<AiFillStar className="text-[#FFD333] text-lg" />
						<AiFillStar className="text-[#FFD333] text-lg" />
						<AiOutlineStar className="text-[#FFD333] text-lg" />
						<span className="ml-1 mb-1 text-[#6c757d]">(99)</span>
					</div> */}
					<div className="flex justify-center mt-2 items-center">
						<Rating name="half-rating-read" value={ratings} precision={0.5} readOnly />
						<span className="ml-1 mb-1 text-[#6c757d]">(99)</span>
					</div>
					<p className="mt-2 max-w-sm text-gray-700"></p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
