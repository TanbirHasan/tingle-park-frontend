import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { baseUrl } from './../../../baseURL';

const AllOrders = () => {
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(4);
	const pages = Math.ceil(count / size);

	const {
		data: orders = [],
		refetch,
		isLoading,
		isPreviousData,
	} = useQuery({
		queryKey: ['orders', page, size],
		queryFn: async () => {
			const res = await fetch(`${baseUrl}/orders?page=${page}&size=${size}`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('minion-commerce-token')}`,
				},
			});
			const result = await res.json();
			const data = result.orders;
			setCount(result.count);
			return data;
		},
	});

	return (
		<div>
			<div className="max-w-6xl text-center px-4 mx-auto sm:px-8">
				<div className="">
					<h1 className="text-5xl font-extrabold my-5">All Orders</h1>
					<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
						<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
							<table className="min-w-full leading-normal">
								{isLoading && (
									<div className="flex h-screen justify-center items-center">
										<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />{' '}
									</div>
								)}
								<thead>
									<tr>
										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal  text-gray-800 uppercase bg-white border-b border-gray-200">
											Name
										</th>

										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal  text-gray-800 uppercase bg-white border-b border-gray-200">
											Email
										</th>
										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal  text-gray-800 uppercase bg-white border-b border-gray-200">
											Order Date
										</th>
									</tr>
								</thead>
								<tbody>
									{orders.map((order) => (
										<tr key={order._id}>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<div className="">
													<p className="text-gray-900 whitespace-no-wrap">{order.firstName}</p>
												</div>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">{order.email}</p>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">{order.orderPlaced}</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
								<div className="flex items-center">
									<button
										onClick={() => {
											setPage((old) => Math.max(old - 1, 0));
										}}
										disabled={page === 0}
										type="button"
										className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
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
											setPage((old) => old + 1);
										}}
										// Disable the Next Page button until we know a next page is available
										disabled={isPreviousData}
										type="button"
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
		</div>
	);
};

export default AllOrders;
