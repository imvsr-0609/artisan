import React, { FC } from 'react';
import DummyUser from '../../assets/dummy-user.svg';
import DummyUserTwo from '../../assets/dummy-user-2.svg';
import ThumbOutline from '../../assets/chat/thumb-outlined.svg';
import ThumbFilled from '../../assets/chat/thumb-filled.svg';
import { DotFilledIcon } from '@radix-ui/react-icons';

type SingleChatProps = {
	sender: boolean;
};

const SingleChat: FC<SingleChatProps> = ({ sender }) => {
	return (
		<div className={`flex ${sender ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
			<img
				className="w-16 h-16 rounded-full object-cover"
				src={sender ? DummyUserTwo : DummyUser}
				alt=""
			/>
			<div className={`flex flex-col gap-4 ${sender && 'items-end'} `}>
				<div className="flex items-center text-base gap-4 ">
					<p className="text-light-blue-800 font-bold ">Ava</p>
					<DotFilledIcon />
					<p className="text-light-gray-700 font-medium ">3:25</p>
				</div>
				<div
					className={`flex items-center gap-4 ${sender && 'flex-row-reverse'} `}
				>
					<div
						className={`p-6  rounded-2xl ${
							sender
								? 'bg-light-gray-300 rounded-tr-none'
								: 'bg-light-purple-100 rounded-tl-none'
						} `}
					>
						<p className="text-light-blue-800 text-base font-normal leading-6">
							Great! Could we start targeting companies in Canada too?
						</p>
					</div>
					{!sender && (
						<div className="flex gap-3 items-center">
							<img
								className="w-6 h-6 object-contain cursor-pointer"
								src={ThumbOutline}
								alt=""
							/>
							<img
								className="w-6 h-6 object-contain transform rotate-180 cursor-pointer "
								src={ThumbOutline}
								alt=""
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleChat;
