import React from 'react';
import { useForm } from 'react-hook-form';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleContact = (data) => {
		const { name, email, subject, message } = data;

		alert(`Name - ${name}
		Email -  ${email}
		Subject -  ${subject}
		Message -  ${message}`);

		reset();
	};

	return (
		<div className="lg:w-[90%] mx-auto my-10 p-4 lg:p-0">
			<div className="mb-10">
				<nav className="w-full h-[48px] flex px-4 bg-white ">
					<ol className="flex  space-x-2 ">
						<li className="flex items-center space-x-1">
							<Link className="flex items-center px-1 text-[#1b1f22] capitalize hover:underline">
								Home
							</Link>
						</li>
						<li className="flex items-center space-x-1">
							<span className="dark:text-gray-400">/</span>
							<Link className="flex items-center px-1 capitalize text-[#6c757d] cursor-default">
								Contact
							</Link>
						</li>
					</ol>
				</nav>
			</div>

			<div className="flex items-center justify-start gap-5">
				<div>
					<h1 className="uppercase text-2xl lg:text-4xl text-[#3D464D] font-bold text-left">
						Contact Us
					</h1>
				</div>
				<div className="flex flex-grow flex-wrap">
					<span className="w-full  border_style "></span>
				</div>
			</div>

			<div className="flex gap-10 flex-col lg:flex-row">
				{/* form (left side of contact Page) */}
				<div className="mt-10 lg:w-[60%]">
					<form onSubmit={handleSubmit(handleContact)} className="bg-white py-5 px-10">
						<div className="mb-5">
							<input
								type="text"
								{...register('name', { required: 'Your Name is required' })}
								placeholder="Your Name"
								className={`w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
									errors.name && 'focus:border-red-600'
								}`}
							/>
							{errors.name && <p className="text-red-600">{errors.name?.message}</p>}
						</div>
						<div className="mb-5">
							<input
								type="text"
								{...register('email', {
									required: 'Email Address is required',
									pattern: {
										value: /.+@.+\..+/i,
										message: 'Please enter a valid email address',
									},
								})}
								placeholder="Your Email"
								className={`w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
									errors.email && 'focus:border-red-600'
								} `}
							/>
							{errors.email && <p className="text-red-600">{errors.email?.message}</p>}
						</div>
						<div className="mb-5">
							<input
								type="text"
								{...register('subject', { required: 'Subject is required' })}
								placeholder="Subject"
								className={`w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
									errors.subject && 'focus:border-red-600'
								}`}
							/>
							{errors.subject && <p className="text-red-600">{errors.subject?.message}</p>}
						</div>
						<div className="mb-5">
							<textarea
								{...register('message', {
									required: 'Subject is required',
									minLength: {
										value: 10,
										message: 'Message must have at least 10 characters',
									},
								})}
								cols="30"
								rows="5"
								placeholder="Message"
								className={`w-full focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333] placeholder:text-[#495057]  border-[#D4D9DF] ${
									errors.message && 'focus:border-red-600'
								}`}></textarea>
							{errors.message && <p className="text-red-600">{errors.message?.message}</p>}
						</div>

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
								referrerPolicy="no-referrer-when-downgrade"></iframe>
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
