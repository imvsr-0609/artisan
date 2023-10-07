import React, { FC, useContext } from 'react';
import DummyUser from '../../assets/dummy-user.svg';
import ChatActionForm from './ChatActionForm';
import ChatList from './ChatList';
import { UserContext, UserContextType } from '../../context/UserContext';

const ChatComponent: FC = () => {
	const { user } = useContext(UserContext) as UserContextType;
	return (
		<div className="flex flex-col h-full relative bg-light-pattern dark:bg-dark-pattern bg-no-repeat bg-cover bg-top">
			<div className="px-10 py-[18px] bg-light-purple-200 dark:bg-transparent dark:bg-gradient-to-br from-light-blue-800 to-light-blue-800/50 bg-opacity-10 flex gap-4 items-center backdrop backdrop-blur-sm absolute top-0 inset-x-0 ">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={user?.picture ?? DummyUser}
					alt=""
				/>

				<h3 className="text-xl font-semibold text-light-blue-800 dark:text-light-gray-300 ">
					{user?.displayName.split(' ')[0]}
				</h3>
			</div>
			<div className="pt-24 px-6 pb-5 w-full h-full  ">
				<div className=" flex flex-col  w-full h-full border border-light-purple-400 border-opacity-20 rounded-t-lg bg-gradient-to-br  dark:bg-gradient-to-tl from-[#6200ff20] to-transparent backdrop backdrop-blur-md  ">
					<ChatList />
					<ChatActionForm />
				</div>
			</div>
		</div>
	);
};

export default ChatComponent;
