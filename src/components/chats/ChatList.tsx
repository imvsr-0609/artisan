import React, { FC } from 'react';
import SingleChat from './SingleChat';

const ChatList: FC = () => {
	return (
		<div className="h-full w-full flex-1 rounded-t-lg p-6 flex flex-col gap-8 overflow-y-scroll scrollbar-hidden ">
			<div className="gap-12 items-center flex text-light-gray-700  ">
				<div className=" text-center border-t flex-1 border-light-gray-700 "></div>
				<p className="text-xl font-normal leading-6 ">Today</p>
				<div className=" text-center border-t flex-1 border-light-gray-700  "></div>
			</div>

			<SingleChat sender />
			<SingleChat sender={false} />
			<SingleChat sender />
			<SingleChat sender={false} />
			<SingleChat sender />
			<SingleChat sender={false} />
			<SingleChat sender />
			<SingleChat sender={false} />
		</div>
	);
};

export default ChatList;
