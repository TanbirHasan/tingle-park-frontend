import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemsFromCart } from '../../features/CartSlice';
import './checkOut.css';

const CheckOut = () => {
	const cartItems = useSelector((state) => state.cartReducer.cartProducts);
	const dispatch = useDispatch();

	const handleIncrease = (id) => {
		const product = cartItems.find((item) => item.id === id);
		// const quantity = product.quantity + 1
	};

	const handleDelete = (id) => {
		dispatch(removeItemsFromCart(id));
	};

	return (
		<div className="w-[90%] mx-auto">
			<h1>This is checkout</h1>

			<div className="my-40">
				<div className="overflow-x-auto">
					<table className="min-w-full  divide-y divide-gray-200 text-sm ">
						<thead className="bg-gray-800 text-white  h-[80px] mb-20">
							<tr className="">
								<th className="whitespace-nowrap px-4 py-2 text-center font-bold text-lg ">
									Product
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-center font-bold text-lg ">
									Price
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-center font-bold text-lg ">
									Quantity
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-center font-bold text-lg ">
									Total
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-center font-bold text-lg ">
									Remove
								</th>
							</tr>
						</thead>

						<tbody className="bg-white divide-gray-200 ">
							{cartItems.map((item) => (
								<tr key={item.id} className="text-center text-[#6c757d] text-lg">
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center gap-2 justify-center">
										<img src={item.picture} alt="" className="w-[50px] h-[50px]" />
										<span className="text-[#6c757d] text-lg">{item.title}</span>
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										$ <span>150</span>
									</td>

									<td className="whitespace-nowrap px-4 py-2">
										<button
											type="button"
											className="inline-flex items-center justify-center w-[30px] h-[31px] text-sm  border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
											<AiOutlineMinus className="text-md font-bold" />
										</button>

										<input
											type="text"
											name=""
											id=""
											defaultValue={1}
											className="inline-flex items-center justify-center w-[40px] h-[31px] text-md  font-semibold text-center bg-[#F5F5F5] focus:outline-0 focus:ring-transparent border-0 "
										/>

										<button
											type="button"
											onClick={handleIncrease(item.id)}
											className="inline-flex items-center justify-center w-[30px] h-[31px] text-sm font-semibold border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
											<AiOutlinePlus className="text-md font-bold" />
										</button>
									</td>

									<td className="whitespace-nowrap px-4 py-2">$120,000</td>
									<td className="whitespace-nowrap px-4 py-2">
										<button
											type="button"
											onClick={()=>handleDelete(item.id)}
											className="inline-flex items-center justify-center w-[30px] h-[31px] text-sm font-semibold border  bg-[#ff0000] text-white hover:bg-[#C82333] duration-500 ">
											<RxCross1 className="text-lg font-extrabold" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
