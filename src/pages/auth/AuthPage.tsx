import React, { FC, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import ArtisanIcon from '../../assets/artisan-logo.svg';

const AuthPage: FC = () => {
	const { signInWithGoogle, loadingUser } = useContext(UserContext);
	return (
		<div className="w-screen h-screen grid place-items-center">
			<div className="flex flex-col gap-8">
				<img src={ArtisanIcon} alt="artisan" />

				<button onClick={signInWithGoogle}>Sign in with google</button>
			</div>
		</div>
	);
};

export default AuthPage;
