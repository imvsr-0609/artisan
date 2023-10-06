import React, { FC } from 'react';
import DummyUser from '../../assets/dummy-user.svg';
import ChatActionForm from './ChatActionForm';
import ChatList from './ChatList';

const ChatComponent: FC = () => {
	return (
		<div className="flex flex-col h-full relative">
			<div className="px-10 py-[18px] bg-light-purple-200 bg-opacity-10 flex gap-4 items-center backdrop backdrop-blur-sm absolute top-0 inset-x-0 ">
				<img
					className="w-16 h-16 rounded-full object-cover"
					src={DummyUser}
					alt=""
				/>

				<h3 className="text-xl font-semibold text-light-blue-800 ">Ava</h3>
			</div>
			<div className="pt-28 px-6 pb-5 w-full h-full  ">
				<div className=" flex flex-col  w-full h-full border border-light-purple-400 border-opacity-20 rounded-t-lg bg-gradient-to-br from-[#6200ff20] to-white backdrop backdrop-blur-sm  ">
					<ChatList />
					<ChatActionForm />
				</div>
			</div>
		</div>
	);
};

export default ChatComponent;
