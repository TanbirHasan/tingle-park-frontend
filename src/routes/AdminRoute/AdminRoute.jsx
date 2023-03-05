import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/UserAuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const [isAdmin, isAdminLoading] = useAdmin(user?.email);

	const location = useLocation();

	// if (user === null) {
	// 	return <Navigate to="/login" state={{ from: location }} replace />;
	// }

	if (loading || isAdminLoading) {
		return (
			<div className="flex h-screen justify-center items-center">
				<PropagateLoader color="#FFD333" size={30} speedMultiplier={2} />
			</div>
		);
	}

	if (user && isAdmin) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
