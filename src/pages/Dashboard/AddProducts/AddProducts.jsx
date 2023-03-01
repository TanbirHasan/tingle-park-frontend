import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../../features/CategorySlice';
import { baseUrl } from './../../../baseURL';
import { AuthContext } from './../../../Contexts/UserAuthProvider';

const AddProducts = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const { categories } = useSelector((state) => state.categoriesReducer);

	const dispatch = useDispatch();
	const [sizes_color, setSizes_color] = useState(true);
	const [loader, setLoader] = useState(false);

	// const handleChange = (event, newAlignment) => {
	// 	setSizes_color(newAlignment);
	// };

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const handleAddProduct = (data) => {
		const category = categories.find((category) => category.categoryName === data.category);

		const categoryId = category._id;

		const product = {
			productsName: data.productName,
			picture: data.picture,
			oldPrice: data.originalPrice,
			newPrice: data.resellPrice,
			stockAmount: data.stockAmount,
			userName: user?.displayName,
			description: data.description,
			category: data.category,
			categoryId: categoryId,
		};

		setLoader(true);
		fetch(`${baseUrl}/products`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					toast.success('Product added successfully');
					reset();
					setLoader(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setLoader(false);
				toast.error(err.message);
			});
	};

	return (
		<div>
			<h1 className="text-5xl font-bold text-center">Add Product</h1>

			<div className="mt-10">
				<div className="flex flex-col max-w-screen-lg mx-auto   p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
					<form onSubmit={handleSubmit(handleAddProduct)} className="space-y-12 ">
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
							<div className="col-span-full sm:col-span-3 mb-5">
								<label className="block mb-2 text-sm">Product Name</label>
								<input
									placeholder="Product Name"
									type="text"
									{...register('productName', { required: 'Product name  is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.productName && (
									<p className="text-red-600">{errors.productName?.message}</p>
								)}
							</div>
							<div className="col-span-full sm:col-span-3 ">
								<label className="block mb-2 text-sm">Product Image</label>
								<input
									type="text"
									{...register('picture', { required: 'Picture is required' })}
									placeholder="Product Image"
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.picture && <p className="text-red-600">{errors.picture?.message}</p>}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Product Original Price</label>
								<input
									type="number"
									{...register('originalPrice', { required: 'Product Original Price is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.originalPrice && (
									<p className="text-red-600">{errors.originalPrice?.message}</p>
								)}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Product Resell Price</label>
								<input
									type="number"
									{...register('resellPrice', { required: 'Product Original Price is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.resellPrice && (
									<p className="text-red-600">{errors.resellPrice?.message}</p>
								)}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Total Stock</label>
								<input
									type="number"
									{...register('stockAmount', { required: 'Stock amount is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.stockAmount && (
									<p className="text-red-600">{errors.originalPrice?.message}</p>
								)}
							</div>

							<div className="col-span-full sm:col-span-3">
								<label className="block mb-2 text-sm">Description</label>

								<textarea
									{...register('description', { required: 'Description is required' })}
									className="textarea textarea-primary w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"></textarea>
								{errors.description && (
									<p className="text-red-600">{errors.description?.message}</p>
								)}
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="block mb-2 text-sm">Categories</label>

								<select
									{...register('category', { required: 'Category must be selected' })}
									className="select select-primary w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100">
									{categories.map((category) => {
										return (
											<>
												<option value="" selected disabled hidden>
													Choose category...
												</option>
												<option key={category._id} value={category.categoryName}>
													{category.categoryName}
												</option>
											</>
										);
									})}
								</select>
								{errors.category && <p className="text-red-600">{errors.category?.message}</p>}
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="block mb-2 text-sm">Sizes_Color</label>

								<ToggleButtonGroup
									color="primary"
									value={sizes_color}
									exclusive
									// {...register('sizes_color', { required: 'Sizes_Color is required' })}
									// onChange={handleChange}
									aria-label="Platform">
									<ToggleButton
										onClick={() => setSizes_color(true)}
										className="text-white"
										value={true}>
										True
									</ToggleButton>
									<ToggleButton
										onClick={() => setSizes_color(false)}
										className="text-white"
										value={false}>
										False
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
						</div>

						<div className="space-y-2">
							<div>
								<button
									type="submit"
									className="w-2/4 block mx-auto px-8 py-3 font-semibold rounded-md bg-yellow-500 text-white duration-500 ">
									{loader ? (
										<>
											<div className="flex items-center justify-center space-x-2">
												<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
												<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
												<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
											</div>
										</>
									) : (
										<span>Add Product</span>
									)}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProducts;
