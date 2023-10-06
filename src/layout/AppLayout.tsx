import React, { FC } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ChatComponent from '../components/chats/ChatComponent';

const AppLayout: FC = () => {
	return (
		<div className="w-screen h-screen flex font-outfit overflow-hidden ">
			<Sidebar />
			<div className="flex-1 w-full">
				<ChatComponent />
			</div>
		</div>
	);
};

export default AppLayout;
