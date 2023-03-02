import { useEffect, useState } from 'react';
import { baseUrl } from '../baseURL';

const useAdmin = (email) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	useEffect(() => {
		if (email) {
			fetch(`${baseUrl}/users/admin/${email}`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('minion-commerce-token')}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setIsAdmin(data.isAdmin);
					setIsAdminLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setIsAdminLoading(false);
				});
		}
	}, [email]);

	return [isAdmin, isAdminLoading];
};

export default useAdmin;
