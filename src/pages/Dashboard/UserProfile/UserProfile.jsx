import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import setAuthToken from '../../../api/authApi';
import { baseUrl } from '../../../baseURL';
import { AuthContext } from '../../../Contexts/UserAuthProvider';

const UserProfile = () => {
	const { user, updateUserProfile } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const [openModal, setOpenModal] = useState(false);
	const [fileURL, setFileURL] = useState();
	const [file, setFile] = useState();
	const imageHostKey = process.env.REACT_APP_imgbb_key;
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function handleChange(e) {
		// console.log(e.target.files);
		setFile(e.target.files);
		setFileURL(URL.createObjectURL(e.target.files[0]));
	}

	const handleClickOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
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
			});
	};

	function refreshPage() {
		window.location.reload(false);
	}

	const handleUpdateUser = (data) => {
		const { name } = data;

		if (file) {
			let image = file[0];
			const formData = new FormData();
			formData.append('image', image);
			const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
			setLoading(true);
			fetch(url, {
				method: 'POST',
				body: formData,
			})
				.then((res) => res.json())
				.then((imgData) => {
					const userInfo = {
						name: name,
						email: user?.email,
					};
					fetch(`${baseUrl}/users/${user?.email}`, {
						method: 'PUT',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(userInfo),
					})
						.then((response) => response.json())
						.then((data) => {
							handleUpdateUserProfile(name, imgData.data.display_url);
							toast.success('Updated Profile Successfully');
							setLoading(false);
							refreshPage();
						});
					// setAuthToken(userInfo);
				})
				.catch((err) => {
					setLoading(false);
					toast.error(err.message);
				});
		} else {
			const profile = {
				displayName: name,
				photoURL: user?.photoURL,
			};

			updateUserProfile(profile)
				.then(() => {
					const userInfo = {
						name: name,
						email: user?.email,
					};
					fetch(`${baseUrl}/users/${user?.email}`, {
						method: 'PUT',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(userInfo),
					})
						.then((response) => response.json())
						.then((data) => {
							refreshPage();
							toast.success('Profile updated successfully');
							refreshPage();
						});
				})
				.catch((err) => {
					toast.error(err.message);
				});
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
				<img className=" w-full h-56" src={user?.photoURL} alt="avatar" />

				<div className="py-5 text-center">
					<p className="block text-xl mb-5 font-bold text-gray-800 dark:text-white" tabIndex="0">
						{user?.displayName}
					</p>
					<Button variant="outlined" className="mt-5" onClick={handleClickOpen}>
						Update Profile
					</Button>
				</div>
			</div>
			{openModal && (
				<>
					<Dialog open={openModal} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
						<DialogContent>
							<form
								onSubmit={handleSubmit(handleUpdateUser)}
								className="space-y-6 w-[90%] mx-auto mt-10">
								<div className="space-y-1 text-sm">
									<label htmlFor="username" className="block text-gray-900">
										Name
									</label>
									<input
										type="text"
										defaultValue={user?.displayName}
										{...register('name', { required: 'Your Name is required' })}
										placeholder="Name"
										className={`w-full mt-3 bg-gray-100 border-gray-700 focus:outline-0 px-4 py-3 rounded-md border  focus:ring-0 focus:ring-transparent focus:border-[#FFD333] focus:border-2    ${
											errors.name && 'focus:border-red-600'
										} `}
									/>
									{errors.name && <p className="text-red-600">{errors.name?.message}</p>}
								</div>
								<div className="space-y-1 text-sm">
									{/* Uploading picture and storing in IMGBB */}
									<label className="block text-gray-900">
										<span className="label-text">Photo</span>
										<div className="extraOutline p-4  m-auto rounded-lg">
											<div
												className={`file_upload p-5 relative border-4 border-dotted  rounded-lg border-gray-400`}>
												{fileURL ? (
													<img
														src={fileURL}
														alt=""
														className="rounded-full w-16 h-16 mx-auto mb-5 mt-5 cursor-pointer"
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
																// required: 'Image is required',
															})}
															className="text-sm cursor-pointer w-36 hidden"
															type="file"
															accept="image/*"
															onChange={handleChange}
														/>

														{fileURL ? null : (
															<div
																className={`text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 hover:bg-indigo-500 ${
																	errors.image &&
																	'bg-red-600 text-white hover:bg-red-700 duration-500'
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
								</div>
								<DialogActions>
									<Button onClick={handleClose}>Cancel</Button>
									<Button type="submit">
										{loading ? (
											<div className="flex items-center justify-center space-x-2">
												<div className="w-4 h-4 rounded-full animate-pulse bg-violet-800"></div>
												<div className="w-4 h-4 rounded-full animate-pulse bg-violet-800"></div>
												<div className="w-4 h-4 rounded-full animate-pulse bg-violet-800"></div>
											</div>
										) : (
											<span>Update</span>
										)}
									</Button>
								</DialogActions>
							</form>
						</DialogContent>
					</Dialog>
				</>
			)}
		</div>
	);
};

export default UserProfile;
