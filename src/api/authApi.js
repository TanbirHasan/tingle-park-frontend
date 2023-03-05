import { baseUrl } from './../baseURL';

const setAuthToken = (user) => {
	const currentUser = {
		name: user?.name,
		email: user?.email,
		role: user?.role,
	};

	fetch(`${baseUrl}/users/${user?.email}`, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
		.then((response) => response.json())
		.then((data) => {
			// console.log(data.token);
			localStorage.setItem('minion-commerce-token', data.token);
		});
};

export default setAuthToken;
