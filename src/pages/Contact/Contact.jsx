import React from 'react';

const Contact = () => {
	return (
		<div className="lg:w-[90%] mx-auto my-20">
			<div className="flex items-center justify-center lg:justify-start gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold  lg:text-left">
					Contact Us
				</h1>
				<div className="hidden lg:flex w-fit">
					<span className="w-[70rem] h-1 border border-dashed bg-red-500"></span>
				</div>
			</div>

			<div>
				{/* form */}
				<div className="mt-10 lg:w-[60%]">
					<form className="bg-white py-5 px-10">
						<input
							type="text"
							name=""
							id=""
							placeholder="Your Name"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057] mb-5 border-[#D4D9DF] "
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="Your Email"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057] mb-5 border-[#D4D9DF] "
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="Subject"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057] mb-5 border-[#D4D9DF] "
						/>
						<textarea
							name=""
							id=""
							cols="30"
							rows="5"
							placeholder="Message"
							className="w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057] mb-5 border-[#D4D9DF] "></textarea>

						<button type="submit" className="bg-[#ffd333] w-[154px] h-[42px] text-[#3d464d]">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
