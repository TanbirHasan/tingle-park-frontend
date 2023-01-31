import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
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
	// const [load, setLoad] = useState(false);

	const navigate = useNavigate();

	const handleRegister = (data) => {
		setRegisterError('');
		const { name, email, password, photo } = data;
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				toast.success('Registered Successfully');
				handleUpdateUserProfile(name, photo);
				verificationEmail();
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
				setRegisterError(err.message);
			});
		reset();
	};

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

	const verificationEmail = () => {
		verifyUserEmail().then(() => {
			toast.success(`Verification email sent successfully`);
		});
	};

	const handleGoogleSignUp = () => {
		googleSignUp()
			.then((result) => {
				console.log(result.user);
				toast.success('successfully signed up');
			})
			.catch((e) => {
				setRegisterError(e.message);
				toast.error(e.message);
			});
	};

	return (
		<div>
			<div className="w-full max-w-md mx-auto my-20 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
				{registerError && <p className="text-center text-xl my-3 text-red-600">{registerError}</p>}
				<h1 className="text-2xl font-bold text-center">Register</h1>
				<form
					onSubmit={handleSubmit(handleRegister)}
					className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block text-gray-400">
							Name
						</label>
						<input
							type="text"
							{...register('name', { required: 'Your Name is required' })}
							placeholder="Name"
							className={`w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 focus:outline-0 focus:ring-0 focus:border-[#FFC800] focus:border-2 ${
								errors.name && 'focus:border-red-600'
							}`}
						/>
						{errors.name && <p className="text-red-600">{errors.name?.message}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block text-gray-400">
							Photo URL
						</label>
						<input
							type="text"
							{...register('photo', { required: 'Photo URL is required' })}
							placeholder="Name"
							className={`w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 focus:outline-0 focus:ring-0 focus:border-[#FFC800] focus:border-2 ${
								errors.photo && 'focus:border-red-600'
							}`}
						/>
						{errors.photo && <p className="text-red-600">{errors.photo?.message}</p>}
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
							className={`w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 focus:outline-0 focus:ring-0 focus:border-[#FFC800] focus:border-2 ${
								errors.email && 'focus:border-red-600'
							}`}
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
									value: 8,
									message: 'Password must be at least 8 characters',
								},
							})}
							placeholder="Password"
							className={`w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 focus:outline-0 focus:ring-0 focus:border-[#FFC800] focus:border-2 ${
								errors.password && 'focus:border-red-600'
							}`}
						/>
						{errors.password && <p className="text-red-600">{errors.password?.message}</p>}
					</div>
					<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600 duration-500">
						Sign up
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
					<p className="px-3 text-sm text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button onClick={handleGoogleSignUp} className="p-3 rounded-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current">
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
						</svg>
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
