import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { baseUrl } from '../../../baseURL';
import EditProductModal from '../../../components/EditProductModal/EditProductModal';

const AllProducts = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(6);
	const pages = Math.ceil(count / size);
	const [openModal, setOpenModal] = React.useState(false);
	const [modalData, setModalData] = useState({});

	const {
		data: products = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ['allProducts', page, size],
		queryFn: async () => {
			const res = await fetch(`${baseUrl}/products/paginated-products?page=${page}&size=${size}`);
			const result = await res.json();
			const data = result.products;
			setCount(result.count);
			return data;
		},
	});

	const handleOpenModal = (product) => {
		setOpenModal(true);
		setModalData(product);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div>
			<div className="max-w-5xl px-4 mx-auto sm:px-8">
				<div className="py-8">
					<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
						<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
							{isLoading ? (
								<div className="flex h-screen justify-center items-center">
									<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
								</div>
							) : (
								''
							)}
							<table className="min-w-full leading-normal">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
											Product ID
										</th>
										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
											Product
										</th>

										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
											Actions
										</th>
									</tr>
								</thead>

								<tbody>
									{products.map((product) => (
										<tr key={product._id}>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<div className="flex items-center">
													<div className="">
														<p className="text-gray-900 whitespace-no-wrap">{product._id}</p>
													</div>
												</div>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<div className="flex items-center">
													<div className="flex-shrink-0">
														<div href="#" className="relative block">
															<img
																alt="product"
																src={product.picture}
																className="mx-auto object-cover rounded-full h-10 w-10 "
															/>
														</div>
													</div>
													<div className="ml-3">
														<p className="text-gray-900 whitespace-no-wrap">
															{product.productsName}
														</p>
													</div>
												</div>
											</td>

											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200 flex gap-5">
												<button
													onClick={() => handleOpenModal(product)}
													type="button"
													class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
													Edit
												</button>
												<button
													type="button"
													class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
								<div className="flex items-center">
									<button
										onClick={() => {
											setPage(page - 1);
											refetch();
										}}
										className="w-full p-4 text-base text-gray-600 bg-white border
										rounded-l-xl hover:bg-gray-100">
										<svg
											width="9"
											fill="currentColor"
											height="8"
											className=""
											viewBox="0 0 1792 1792"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
										</svg>
									</button>
									<>
										{[...Array(pages).keys()].map((number) => (
											<button
												key={number}
												className={`w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ${
													page === number ? ' font-extrabold text-xl border' : ''
												}`}
												onClick={() => {
													setPage(number);
													refetch();
												}}>
												{number + 1}
											</button>
										))}
									</>

									<button
										onClick={() => {
											setPage(page + 1);
											refetch();
										}}
										className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
										<svg
											width="9"
											fill="currentColor"
											height="8"
											className=""
											viewBox="0 0 1792 1792"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<>
				{openModal ? (
					<EditProductModal
						open={openModal}
						handleOpen={handleOpenModal}
						data={modalData}
						handleClose={handleCloseModal}
						refetch={refetch}
					/>
				) : null}
			</>
		</div>
	);
};

export default AllProducts;
