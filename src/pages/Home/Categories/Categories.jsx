import React, { useEffect, useState } from 'react';

import { baseUrl } from './../../../baseURL';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const url = `${baseUrl}/categories`;
		const fetchCategories = async () => {
			try {
				const response = await fetch(url);
				const jsonData = await response.json();
				setCategories(jsonData);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchCategories();
	}, []);

	// const { categories, isLoading } = useSelector((state) => state.categoriesReducer);

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchCategories());
	// }, [dispatch]);

	return (
		<div className="my-20">
			<div className="flex items-center  gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold lg:text-left">
					Categories
				</h1>
				<div className="flex flex-grow flex-wrap">
					<span className="w-full  border_style "></span>
				</div>
			</div>

			<div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
				{categories.map((category, index) => (
					<CategoriesCard key={category._id} category={category} />
				))}
			</div>
		</div>
	);
};

export default Categories;
