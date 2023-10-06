import { FC, useContext } from 'react';
import ChatComponent from '../components/chats/ChatComponent';
import Sidebar from '../components/sidebar/Sidebar';
import { UserContext, UserContextType } from '../context/UserContext';

const AppLayout: FC = () => {
	const { user } = useContext(UserContext) as UserContextType;

	return (
		<div className="w-screen h-screen flex font-outfit overflow-hidden ">
			<Sidebar user={user} />
			<div className="flex-1 w-full">
				<ChatComponent />
			</div>
		</div>
	);
};

export default AppLayout;
