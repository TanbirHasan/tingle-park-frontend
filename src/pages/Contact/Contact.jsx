import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact = () => {
	return (
		<div className="lg:w-[90%] mx-auto my-20 p-4 lg:p-0">
			<div className="flex items-center justify-start gap-5">
				<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold text-left">
					Contact Us
				</h1>
				<div className="flex w-[80%] flex-wrap">
					<span className="w-full  h-1 border border-dashed bg-[#909fa7]"></span>
				</div>
			</div>

			<div className="flex gap-10 flex-col lg:flex-row">
				{/* form (left side of contact Page) */}
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

				{/* Right side of contact page */}

				<div>
					<div>
						<div className="bg-white p-8 mt-10 ">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14759.44120186535!2d91.86110215000001!3d22.35890315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1673931072858!5m2!1sen!2sbd"
								title="myLocation"
								className="w-full lg:w-[500px] h-[200px]"
								style={{ border: 0 }}
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>

					<div className="bg-white p-5 gap-10 mt-10">
						<ul className="mt-2 space-y-2">
							<li className="flex justify-center md:justify-start items-center gap-2">
								<MdLocationOn className="text-xl text-[#FFD333]" />
								<p className="text-md text-[#6c757d]">123 Street, New York, USA</p>
							</li>
							<li className="flex justify-center md:justify-start items-center gap-2">
								<MdEmail className="text-xl text-[#FFD333]" />
								<p className="text-md text-[#6c757d]">info@example.com</p>
							</li>
							<li className="flex justify-center md:justify-start items-center gap-2">
								<BsFillTelephoneFill className="text-xl text-[#FFD333]" />
								<p className="text-md text-[#6c757d]">+012 345 67890</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
