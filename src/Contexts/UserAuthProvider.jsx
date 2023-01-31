import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserAuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	// create a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// update user profile

	const updateUserProfile = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const authInfo = { createUser, updateUserProfile };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserAuthProvider;
