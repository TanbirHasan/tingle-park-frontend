import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeItemsFromCart } from '../../features/CartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
	const cartItems = useSelector((state) => state.cartReducer.cartProducts);
	const dispatch = useDispatch();

	const [purchaseQuantity, setPurchaseQuantity] = useState(1);

	const handleIncrease = (product) => {
		dispatch(increaseQuantity(product));
		setPurchaseQuantity(purchaseQuantity + 1);
	};

	const handleDecrease = (product) => {
		dispatch(decreaseQuantity(product));
		setPurchaseQuantity(purchaseQuantity - 1);
	};

	const handleDelete = (id) => {
		dispatch(removeItemsFromCart(id));
	};

	let total = 0;

	cartItems.map((item) => (total += item.quantity * item.price));

	return (
		<div className="w-[90%] mx-auto">
			<div className="mt-10">
				<nav className="w-full h-[48px] flex px-4 bg-white ">
					<ol className="flex  space-x-2 ">
						<li className="flex items-center space-x-1">
							<Link
								to={'/'}
								className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
								Home
							</Link>
						</li>
						<li className="flex items-center space-x-1">
							<span className="dark:text-gray-400">/</span>
							<Link
								to={'/shop'}
								className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
								Shop
							</Link>
						</li>
						<li className="flex items-center space-x-1">
							<span className="dark:text-gray-400">/</span>
							<Link className="flex items-center px-1 capitalize text-[#6c757d] cursor-default">
								Shopping Cart
							</Link>
						</li>
					</ol>
				</nav>
			</div>

			<div className="my-10 flex flex-col lg:flex-row gap-10">
				<div className="overflow-x-auto lg:w-[70%]">
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
									<td className="whitespace-nowrap px-10 lg:px-4 py-2 font-medium text-gray-900 flex items-center gap-2 justify-center">
										<img src={item.picture} alt="" className="w-[50px] h-[50px]" />
										<span className="text-[#6c757d] text-lg">{item.title}</span>
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										$ <span>{item.price}</span>
									</td>

									<td className="whitespace-nowrap px-4 py-2">
										<div className="text-red-600 mb-2">
											{item.stockAmount - 1 === 0 ? 'No more stock available' : ''}
										</div>

										<button
											disabled={item.quantity === 0 ? true : false}
											type="button"
											onClick={() => handleDecrease(item)}
											className="inline-flex items-center justify-center w-[30px] h-[31px] text-sm  border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
											<AiOutlineMinus className="text-md font-bold" />
										</button>

										{/* {item.stockAmount - 1 === 0 ? (
											<button
												type="button"
												className="inline-flex items-center justify-center w-[190px] h-[31px] text-md  font-semibold text-center bg-[#F5F5F5] text-red-500 focus:outline-0 focus:ring-transparent border-0 ">
												<span className='text-black'>{item.quantity >= 0 ? item.quantity : 0}</span> No stock Available
											</button>
										) : (
											<button
												type="button"
												className="inline-flex items-center justify-center w-[40px] h-[31px] text-md  font-semibold text-center bg-[#F5F5F5] focus:outline-0 focus:ring-transparent border-0 ">
												{item.quantity >= 0 ? item.quantity : 0}
											</button>
										)} */}
										<button
											type="button"
											className="inline-flex items-center justify-center w-[40px] h-[31px] text-md  font-semibold text-center bg-[#F5F5F5] focus:outline-0 focus:ring-transparent border-0 ">
											{item.quantity >= 0 ? item.quantity : 0}
										</button>

										<button
											disabled={(item.stockAmount - 1)  === 0 ? true : false}
											type="button"
											onClick={() => handleIncrease(item)}
											className="inline-flex items-center justify-center w-[30px] h-[31px] text-sm font-semibold border  bg-[#FFD333] text-[#3D464D] hover:bg-[#FFCB0D] duration-500 ">
											<AiOutlinePlus className="text-md font-bold" />
										</button>
									</td>

									<td className="whitespace-nowrap px-4 py-2">
										$<span>{parseInt(item.quantity * item.price)}</span>
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										<button
											type="button"
											onClick={() => handleDelete(item.id)}
											className="inline-flex items-center justify-center w-[30px] h-[31px] text-sm font-semibold border  bg-[#ff0000] text-white hover:bg-[#C82333] duration-500 ">
											<RxCross1 className="text-lg font-extrabold" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div>
					<div className="flex justify-center lg:justify-start">
						<input
							placeholder="Coupon Code"
							required
							type="email"
							className="py-2 px-7 h-[48px] border-0 focus:outline-0 focus:ring-0"
						/>
						<button
							type="button"
							className="bg-[#FFD333] text-sm hover:bg-[#FFCB0D] duration-500 lg:py-2 px-4 h-[48px]">
							Apply Coupon
						</button>
					</div>

					<div>
						<div className="flex items-center gap-2 my-5">
							<h1 className="uppercase text-xl font-semibold my-4 text-[#3d464d]">Cart Summary</h1>
							<div className="flex flex-grow flex-wrap">
								<span className="w-full  border_style "></span>
							</div>
						</div>

						<div className="bg-white py-10 px-5 space-y-5 text-[#3d464d] font-semibold">
							<div className="flex justify-between">
								<h1>Sub total</h1>
								<p>
									$<span>{total}</span>
								</p>
							</div>
							<div className="flex justify-between">
								<h1>Shipping</h1>
								<p>$10</p>
							</div>
							<hr />

							<div>
								<div className="flex justify-between">
									<h1>Total</h1>
									<p>
										$<span>{total + 10}</span>
									</p>
								</div>
							</div>
							<div>
								<Link to="/checkout" state={purchaseQuantity}>
									<button
										type="submit"
										className="bg-[#FFD333] hover:bg-[#FFCB0D] duration-500 py-3 px-7 w-full mt-4">
										Proceed To Checkout
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
