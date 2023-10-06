import React, { FC } from 'react';
import ErrorImage from '../../assets/404.png';
const ErrorPage: FC = () => {
	return (
		<div className="h-screen w-full grid place-items-center">
			<img src={ErrorImage} alt="" className="w-3/4 max-w-3xl object-contain" />
		</div>
	);
};

export default ErrorPage;
