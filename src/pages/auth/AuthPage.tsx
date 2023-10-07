import React, { FC, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import ArtisanIcon from '../../assets/artisan-logo-light.svg';

const AuthPage: FC = () => {
	const { signInWithGoogle, loadingUser } = useContext(UserContext);
	return (
		<div className="w-screen h-screen grid place-items-center bg-light-pattern bg-no-repeat bg-cover bg-left ">
			<div className="flex flex-col items-center gap-8 p-20 rounded-lg  bg-gradient-to-br from-[#6200ff20] to-white backdrop backdrop-blur-sm border border-light-purple-150 border-opacity-50 ">
				<img src={ArtisanIcon} alt="artisan" />

				<p className="text-light-blue-800 font-medium text-base">
					Get ready to onboard your first digital employee
				</p>

				<button
					className="flex justify-center items-center rounded-lg gap-4 p-4 border-2 border-light-blue-500 text-light-blue-500 font-medium text-base w-full max-w-lg "
					onClick={signInWithGoogle}
				>
					<img
						src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
						alt=""
						className="w-6 h-6 object-contain"
					/>
					Continue With Google
				</button>
			</div>
		</div>
	);
};

export default AuthPage;
