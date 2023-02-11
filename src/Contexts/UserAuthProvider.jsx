import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserAuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const provider = new GoogleAuthProvider();

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

	// sign in
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// google

	const googleSignUp = () => {
		return signInWithPopup(auth, provider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

    const verifyUserEmail = () => { 
        return sendEmailVerification(auth.currentUser)
    }

	const forgotPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('currentUser', currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		updateUserProfile,
		googleSignUp,
		signIn,
		forgotPassword,
        logOut,
		verifyUserEmail,
		loading
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserAuthProvider;
