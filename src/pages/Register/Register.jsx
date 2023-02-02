import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthProvider';

const Register = () => {
	const { createUser, updateUserProfile, googleSignUp, verifyUserEmail } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const [registerError, setRegisterError] = useState('');
	const [load, setLoad] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const imageHostKey = process.env.REACT_APP_imgbb_key;

	const handleRegister = (data) => {
		setRegisterError('');
		const { name, email, password, image } = data;

		// const { name, email, password } = data;
		// const image = data.image[0];
		// const formData = new FormData();
		// formData.append('image', image);
		// const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
		// setLoad(true);
		// fetch(url, {
		// 	method: 'POST',
		// 	body: formData,
		// })
		// 	.then((res) => res.json())
		// 	.then((imgData) => {
		// 		console.log(imgData);
		// 		createUser(email, password)
		// 			.then((result) => {
		// 				console.log(result.user);
		// 				toast.success('Registered Successfully');
		// 				handleUpdateUserProfile(name, image);
		// 				verificationEmail();
		// 				navigate('/');
		// 				setLoad(false);
		// 			})
		// 			.catch((err) => {
		// 				console.log(err);
		// 				toast.error(err.message);
		// 				setRegisterError(err.message);
		// 				setLoad(false);
		// 			});
		// 	});

		setLoad(true);
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				toast.success('Registered Successfully');
				handleUpdateUserProfile(name, image);
				verificationEmail();
				navigate('/');
				setLoad(false);
			})
			.catch((e) => {
				console.log(e);
				toast.error(e.message.slice(17, e.message.length - 2));
				setRegisterError(e.message.slice(17, e.message.length - 2));
				setLoad(false);
			});

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
				console.log(result.user);
				toast.success('Successfully Signed up');
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
				{registerError && <p className="text-center text-xl  text-red-600">{registerError}</p>}
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
						<label htmlFor="username" className="block text-gray-400">
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
						{errors.image && <p className="text-red-600">{errors.image?.message}</p>}

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
						/>
						{errors.image && <p className="text-red-600">{errors.image?.message}</p>} */}
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
					{load ? (
						<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
					) : (
						<button
							type="submit"
							className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600 duration-500">
							Sign up
						</button>
					)}
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
