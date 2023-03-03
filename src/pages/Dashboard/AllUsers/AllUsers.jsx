import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../../Contexts/UserAuthProvider';
import { baseUrl } from './../../../baseURL';

const AllUsers = () => {
	const { deleteFirebaseUser } = useContext(AuthContext);

	const [openDialog, setOpenDialog] = useState(false);
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(4);
	const pages = Math.ceil(count / size);
	const [singleUser, setSingleUser] = useState({});

	const {
		data: users = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ['allUsers'],
		queryFn: async () => {
			const res = await fetch(`${baseUrl}/users`);
			const result = await res.json();
			const data = result.users;
			setCount(result.count);
			return data;
		},
	});

	const handleClickOpen = (user) => {
		setOpenDialog(true);
		setSingleUser(user);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	//! all users excluding admins
	const noAdminUsers = users.filter((user) => user.role !== 'admin');

	// handle delete user from firebase and database
	const handleDeleteUser = (user) => {
		// deleteFirebaseUser().then(() => {
		// });
		fetch(`${baseUrl}/users/${user._id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				toast.success(`${user.name} deleted successfully`);
				refetch();
				setOpenDialog(false);
			});
	};

	return (
		<div className="">
			<div className="max-w-6xl text-center px-4 mx-auto sm:px-8">
				<div className="">
					<h1 className="text-5xl font-extrabold my-5">All Users</h1>
					<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
						<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
							{isLoading && (
								<div className="flex h-screen justify-center items-center">
									<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />{' '}
								</div>
							)}
							<table className="min-w-full leading-normal">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal  text-gray-800 uppercase bg-white border-b border-gray-200">
											User
										</th>

										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal  text-gray-800 uppercase bg-white border-b border-gray-200">
											Email
										</th>
										<th
											scope="col"
											className="px-5 py-3 text-sm font-normal  text-gray-800 uppercase bg-white border-b border-gray-200">
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{noAdminUsers.map((user) => (
										<tr key={user._id}>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<div className="">
													<p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
												</div>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
											</td>

											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<button
													type="button"
													// onClick={() => handleDeleteUser(user)}
													onClick={() => handleClickOpen(user)}
													className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
								<div className="flex items-center">
									<button
										type="button"
										className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
										<svg
											width="9"
											fill="currentColor"
											height="8"
											className=""
											viewBox="0 0 1792 1792"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
										</svg>
									</button>
									<>
										{[...Array(pages).keys()].map((number) => (
											<button
												key={number}
												className={`w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ${
													page === number ? ' font-extrabold text-xl border' : ''
												}`}
												onClick={() => {
													setPage(number);
													refetch();
												}}>
												{number + 1}
											</button>
										))}
									</>
									{/* <button
										type="button"
										className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
										1
									</button>
									<button
										type="button"
										className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
										2
									</button>
									<button
										type="button"
										className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
										3
									</button>
									<button
										type="button"
										className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
										4
									</button> */}
									<button
										type="button"
										className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
										<svg
											width="9"
											fill="currentColor"
											height="8"
											className=""
											viewBox="0 0 1792 1792"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<>
				{openDialog ? (
					<Dialog
						open={openDialog}
						user={singleUser}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description">
						<DialogTitle id="alert-dialog-title">{`Are you sure you want to delete`}
							<span className='font-extrabold'> {singleUser.name } ?</span>
						</DialogTitle>

						<DialogActions>
							<Button onClick={handleClose}>Disagree</Button>
							<Button startIcon={<DeleteIcon />} color="error" onClick={() => handleDeleteUser(singleUser)} autoFocus>
								Delete
							</Button>
						</DialogActions>
					</Dialog>
				) : (
					''
				)}
			</>
		</div>
	);
};

export default AllUsers;
