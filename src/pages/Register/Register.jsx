import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthProvider';
import setAuthToken from './../../api/authApi';

const Register = () => {
	const { createUser, updateUserProfile, googleSignUp, verifyUserEmail } = useContext(AuthContext);

	const [fileURL, setFileURL] = useState();
	const [file, setFile] = useState();

	function handleChange(e) {
		// console.log(e.target.files);
		setFile(e.target.files);
		setFileURL(URL.createObjectURL(e.target.files[0]));
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const [registerError, setRegisterError] = useState('');
	const [load, setLoad] = useState(false);
	// const [fileError, setFileError] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const imageHostKey = process.env.REACT_APP_imgbb_key;

	const handleRegister = (data) => {
		setRegisterError('');

		const { name, email, password } = data;
		// const image = data.image[0];
		const image = file[0];
		// console.log(image)
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
		setLoad(true);
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				console.log(imgData);
				createUser(email, password)
					.then((result) => {
						toast.success('Registered Successfully');

						const userInfo = {
							name: name,
							email: email,
						};
						setAuthToken(userInfo);
						handleUpdateUserProfile(name, imgData.data.display_url);
						verificationEmail();
						navigate('/');
						setLoad(false);
					})
					.catch((err) => {
						console.log(err);
						toast.error(err.message);
						setRegisterError(err.message);
						setLoad(false);
					});
			});

		// const { name, email, password, image } = data;
		// setLoad(true);
		// createUser(email, password)
		// 	.then((result) => {
		// 		console.log(result.user);
		// 		toast.success('Registered Successfully');
		// 		handleUpdateUserProfile(name, image);
		// 		verificationEmail();
		// 		navigate('/');
		// 		setLoad(false);
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 		toast.error(e.message.slice(17, e.message.length - 2));
		// 		setRegisterError(e.message.slice(17, e.message.length - 2));
		// 		setLoad(false);
		// 	});

		reset();
	};

	// update user profile
	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};

		updateUserProfile(profile)
			.then(() => {})
			.catch((err) => {
				toast.error(err.message);
				setRegisterError(err.message);
			});
	};

	// verify email address
	const verificationEmail = () => {
		verifyUserEmail().then(() => {
			toast.success(`Verification email sent successfully`);
		});
	};

	// google sign in
	const handleGoogleSignUp = () => {
		googleSignUp()
			.then((result) => {
				const user = result.user;
				toast.success('Successfully Signed up');
				const userInfo = {
					name: user?.displayName,
					email: user?.email,
				};
				setAuthToken(userInfo);
				navigate(from, { replace: true });
			})
			.catch((e) => {
				setRegisterError(e.message.slice(17, e.message.length - 2));
				toast.error(e.message.slice(17, e.message.length - 2));
			});
	};

	return (
		<div>
			<div className="w-full max-w-lg mx-auto my-20 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
				<h1 className="text-5xl font-extrabold text-center mb-5">Register</h1>
				{/* {registerError && <p className="text-center text-xl  text-red-600">{registerError}</p>} */}
				<form onSubmit={handleSubmit(handleRegister)} className="space-y-6 w-[90%] mx-auto">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block text-gray-400">
							Name
						</label>
						<input
							type="text"
							{...register('name', { required: 'Your Name is required' })}
							placeholder="Name"
							className={`w-full mt-3 bg-gray-900 border-gray-700 focus:outline-0 px-4 py-3 rounded-md border  focus:ring-0 focus:ring-transparent focus:border-[#FFD333] focus:border-2    ${
								errors.name && 'focus:border-red-600'
							} `}
						/>
						{errors.name && <p className="text-red-600">{errors.name?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						{/* <label htmlFor="username" className="block text-gray-400">
							Photo URL
						</label>
						<input
							type="text"
							{...register('image', { required: 'Photo URL is required' })}
							placeholder="Photo URL"
							className={`w-full mt-3 bg-gray-900 border-gray-700 focus:outline-0 px-4 py-3 rounded-md border  focus:ring-0 focus:ring-transparent focus:border-[#FFD333] focus:border-2    ${
								errors.image && 'focus:border-red-600'
							} `}
						/>
						{errors.image && <p className="text-red-600">{errors.image?.message}</p>} */}

						{/* Uploading picture and storing in IMGBB */}
						<label className="block text-gray-400">
							<span className="label-text">Photo</span>
							<div className="extraOutline p-4  m-auto rounded-lg">
								<div
									className={`file_upload p-5 relative border-4 border-dotted  rounded-lg border-gray-400`}>
									{fileURL ? (
										<img
											src={fileURL}
											alt=""
											className="rounded-full w-16 h-16 mx-auto mb-5 mt-5"
										/>
									) : (
										<svg
											className="text-indigo-500 w-24 mx-auto mb-4 animate-pulse"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
											/>
										</svg>
										// <img src={uploadGif} alt="" className="text-indigo-500 w-24 mx-auto mb-4" />
									)}

									<div className="input_field flex flex-col w-max mx-auto text-center">
										<label>
											<input
												{...register('image', {
													required: 'Image is required',
												})}
												className="text-sm cursor-pointer w-36 hidden"
												type="file"
												accept="image/*"
												onChange={handleChange}
											/>

											{fileURL ? null : (
												<div
													className={`text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 hover:bg-indigo-500 ${
														errors.image && 'bg-red-600 text-white hover:bg-red-700 duration-500'
													}`}>
													{errors.image ? 'Please select an Image' : 'Select'}
												</div>
											)}
										</label>
									</div>
								</div>
							</div>
							{/* {errors.image && <p className="text-red-600">{errors.image?.message}</p>} */}
						</label>

						{/* For photoURL */}
						{/* <label className="label">
							<span className="label-text">Photo</span>
						</label>

						<input
							{...register('image', {
								required: 'Image is required',
							})}
							type="file"
							accept="image/*"
							className="input input-bordered w-full "
						/> */}
						{/* {errors.image && <p className="text-red-600">{errors.image?.message}</p>} */}
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block text-gray-400">
							Email
						</label>
						<input
							type="text"
							{...register('email', {
								required: 'Email Address is required',
								pattern: {
									value: /.+@.+\..+/i,
									message: 'Please enter a valid email address',
								},
							})}
							placeholder="Email"
							className={`w-full mt-3 bg-gray-900 border-gray-700 focus:outline-0 px-4 py-3 rounded-md border  focus:ring-0 focus:ring-transparent focus:border-[#FFD333] focus:border-2    ${
								errors.email && 'focus:border-red-600'
							} `}
						/>
						{errors.email && <p className="text-red-600">{errors.email?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block text-gray-400">
							Password
						</label>
						<input
							type="password"
							{...register('password', {
								required: 'Password  is required',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters',
								},
							})}
							placeholder="Password"
							className={`w-full mt-3 bg-gray-900 border-gray-700 focus:outline-0 px-4 py-3 rounded-md border  focus:ring-0 focus:ring-transparent focus:border-[#FFD333] focus:border-2    ${
								errors.password && 'focus:border-red-600'
							} `}
						/>
						{errors.password && <p className="text-red-600">{errors.password?.message}</p>}
					</div>
					<button
						type="submit"
						className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600 duration-500">
						{load ? (
							<div className="w-6 h-6 mx-auto border-4 border-dashed rounded-full animate-spin border-yellow-300"></div>
						) : (
							<span>Sign up</span>
						)}
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
					<p className="px-3 text-sm text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button
						onClick={handleGoogleSignUp}
						className="p-3 rounded-sm hover:scale-110 duration-700">
						<FcGoogle className="w-10 h-10" />
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 text-gray-400">
					Already have an account?
					<Link to={'/login'} className="underline text-gray-100 ml-2">
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
