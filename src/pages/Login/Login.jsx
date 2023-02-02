import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthProvider';

const Login = () => {
	const { signIn, googleSignUp, forgotPassword } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [loginError, setLoginError] = useState('');
	const [load, setLoad] = useState(false);

	const userEmail = watch('email');

	const handleLogin = (data) => {
		setLoginError('');
		const { email, password } = data;
		setLoad(true);
		signIn(email, password)
			.then((result) => {
				console.log(result.user);
				toast.success('Successfully signed in');
				navigate(from, { replace: true });
				setLoad(false);
			})
			.catch((e) => {
				setLoginError(e.message.slice(17, e.message.length - 2));
				toast.error(e.message.slice(17, e.message.length - 2));
				setLoad(false);
			});
		reset();
	};

	const handleGoogleSignUp = () => {
		googleSignUp()
			.then((result) => {
				console.log(result.user);
				toast.success('successfully signed in');
				navigate(from, { replace: true });
			})
			.catch((e) => {
				setLoginError(e.message.slice(17, e.message.length - 2));
				toast.error(e.message.slice(17, e.message.length - 2));
			});
	};

	const handleForgotPassword = () => {
		forgotPassword(userEmail)
			.then(() => {
				toast.success('Password reset email sent!');
			})
			.catch((e) => {
				toast.error(e.message.slice(17, e.message.length - 2));
				setLoginError(e.message.slice(17, e.message.length - 2));
			});
	};

	return (
		<div>
			<div className="w-full max-w-md mx-auto my-20 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
				<h1 className="text-5xl font-extrabold text-center mb-5">Login</h1>
				{loginError && <p className="text-center text-xl   text-red-600">{loginError}</p>}

				<form
					onSubmit={handleSubmit(handleLogin)}
					className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block text-gray-400">
							Email
						</label>
						<input
							type="email"
							{...register('email', {
								required: 'Email Address is required',
								pattern: {
									value: /.+@.+\..+/i,
									message: 'Please enter a valid email address',
								},
							})}
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
							name="password"
							{...register('password', { required: 'Password  is required' })}
							className={`w-full mt-3 bg-gray-900 border-gray-700 focus:outline-0 px-4 py-3 rounded-md border  focus:ring-0 focus:ring-transparent focus:border-[#FFD333] focus:border-2    ${
								errors.password && 'focus:border-red-600'
							} `}
						/>
						{errors.password && <p className="text-red-600">{errors.password?.message}</p>}
					<div className="flex justify-end mt-4 text-xs text-gray-400">
						<button onClick={handleForgotPassword}>Forgot Password?</button>
					</div>
					</div>
					{load ? (
						<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
					) : (
						<button
							type="submit"
							className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600 duration-500">
							Sign in
						</button>
					)}
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
					Don't have an account?
					<Link to={'/register'} className="underline text-gray-100">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
