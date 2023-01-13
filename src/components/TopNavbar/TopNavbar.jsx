import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

const TopNavbar = () => {
	const [openAccountDropdown, setOpenAccountDropdown] = useState(false);

	return (
		<div className="bg-[#F5F5F5] px-10 lg:h-[45px]">
			<div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:h-[45px]">
				<div className="flex  gap-5 text-[#6c757d] mb-5 lg:mb-0">
					<Link>
						<p className="hover:underline">About</p>
					</Link>
					<Link>
						<p className="hover:underline">Contact</p>
					</Link>
					<Link>
						<p className="hover:underline">Help</p>
					</Link>
					<Link>
						<p className="hover:underline">FAQs</p>
					</Link>
				</div>

				<div>
					<div className="flex items-center gap-5">
						<div onClick={() => setOpenAccountDropdown(!openAccountDropdown)} className="">
							<div className="relative  flex items-center justify-between p-5  duration-500 cursor-pointer">
								<div className="flex items-center gap-2">
									<button className="font-semibold bg-white p-1 px-2 flex items-center hover:bg-[#ECECEC] duration-500">
										<span className="text-sm">My Account</span>
										<AiFillCaretDown className="text-xs" />
									</button>
									<ul
										className={`menu absolute   w-[200px] bg-white z-10 top-[70px] right-[-1px] duration-500 flex flex-col group text-box   ${
											openAccountDropdown ? 'dropdown-active' : 'dropdown-inactive'
										} `}>
										<>
											<NavLink to={'/login'}
												className={`hover:bg-[#F5F5F5] p-3 reg`}
												>
												<p>Sign In</p>
											</NavLink>
											<NavLink to={'/register'} className="hover:bg-[#F5F5F5] p-3">
												<p>Sign Up</p>
											</NavLink>
										</>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavbar;
