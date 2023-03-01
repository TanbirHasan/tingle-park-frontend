import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../features/ProductSlice';
import './categoriesCard.css';

const CategoriesCard = ({ category }) => {
	const { categoryName, categoryPicture } = category;

	const { products, isLoading } = useSelector((state) => state.productsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const categorizedProducts = products.filter((product) => product.category === categoryName);

	return (
		<Link to="/categorizedProduct" state={category}>
			<div className="container cursor-pointer lg:w-[300px] mx-auto shadow-xl hover:shadow-2xl group hover:bg-[#FFD333] duration-500 mb-10">
				<div className="flex gap-10 lg:gap-0 items-center lg:flex-row  md:p-0 cursor-pointer group ">
					<div className="box">
						<img
							className=" w-[100px] h-[100px] pb-2 md:pb-0  bg-transparent flex-none bg-cover"
							src={categoryPicture}
							alt=""
						/>
					</div>
					<div className=" rounded-b lg:rounded-b-none lg:rounded-r text-center md:text-left   lg:ml-10 space-y-2 pb-5 md:pb-0 ">
						<h2 className="text-[#3d464d] text-xl font-medium">{categoryName}</h2>
						<p className="text-[#6c757d] text-md ">{categorizedProducts.length} products </p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CategoriesCard;
