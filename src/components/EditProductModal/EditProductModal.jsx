import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../baseURL';

const EditProductModal = ({ open, handleOpen, handleClose, data, refetch }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const [loader, setLoader] = useState(false);

	const { categories } = useSelector((state) => state.categoriesReducer);
	// const dispatch = useDispatch();
	// const [sizes_color, setSizes_color] = useState(true);

	// const handleChange = (event, newAlignment) => {
	// 	setSizes_color(newAlignment);
	// };

	// useEffect(() => {
	// 	dispatch(fetchCategories());
	// }, [dispatch]);

	const handleEditProduct = (d) => {
		const product = {
			productsName: d.productName,
			picture: d.picture,
			oldPrice: d.originalPrice,
			newPrice: d.resellPrice,
			stockAmount: d.stockAmount,
			description: d.description,
		};

		setLoader(true);
		fetch(`${baseUrl}/products/${data._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success('Product updated successfully');
					reset();
					refetch();
					setLoader(false);
					handleClose();
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
			<Button onClick={handleOpen}>Open modal</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullScreen={true}
				product={data}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<div className="mt-10">
						<div className="flex flex-col max-w-screen-lg mx-auto   p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
							<form onSubmit={handleSubmit(handleEditProduct)} className="space-y-12 ">
								<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
									<div className="col-span-full sm:col-span-3 mb-5">
										<label className="block mb-2 text-sm">Product Name</label>
										<input
											placeholder="Product Name"
											type="text"
											defaultValue={data.productsName}
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
											defaultValue={data.picture}
											placeholder="Product Image"
											className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
										/>
										{errors.picture && <p className="text-red-600">{errors.picture?.message}</p>}
									</div>

									<div className="col-span-full sm:col-span-2">
										<label className="block mb-2 text-sm">Product Original Price</label>
										<input
											type="number"
											{...register('originalPrice', {
												required: 'Product Original Price is required',
											})}
											defaultValue={data.oldPrice}
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
											{...register('resellPrice', {
												required: 'Product Original Price is required',
											})}
											defaultValue={data.newPrice}
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
											defaultValue={data.stockAmount}
											className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
										/>
										{errors.stockAmount && (
											<p className="text-red-600">{errors.originalPrice?.message}</p>
										)}
									</div>

									<div className="col-span-full ">
										<label className="block mb-2 text-sm">Description</label>

										<textarea
											{...register('description', { required: 'Description is required' })}
											rows="5"
											defaultValue={data.description}
											className="textarea textarea-primary w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"></textarea>
										{errors.description && (
											<p className="text-red-600">{errors.description?.message}</p>
										)}
									</div>
									{/* <div className="col-span-full sm:col-span-3">
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
														<option
															
															key={category._id}
															value={category.categoryName}>
															{category.categoryName}
														</option>
													</>
												);
											})}
										</select>
										{errors.category && <p className="text-red-600">{errors.category?.message}</p>}
									</div> */}
									{/* <div className="col-span-full sm:col-span-3">
										<label className="block mb-2 text-sm">Sizes_Color</label>

										<ToggleButtonGroup
											color="primary"
											value={sizes_color}
											exclusive
											
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
									</div> */}
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
												<span>Update Product</span>
											)}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default EditProductModal;
