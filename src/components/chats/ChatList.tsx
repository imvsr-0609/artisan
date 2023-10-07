import { FC, useEffect, useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/firebase';
import SingleChat from './SingleChat';

const ChatList: FC = () => {
	const chatRef = useRef<any>(null);

	const [messages, loading] = useCollection(
		db.collection('messages').orderBy('timestamp'),

		{
			snapshotListenOptions: { includeMetadataChanges: true },
		},
	);
	useEffect(() => {
		// window.scrollTo(0, 0);

		chatRef?.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}, [messages]);

	return (
		<div
			ref={chatRef}
			className="h-full w-full flex-1 rounded-t-lg p-6 flex flex-col gap-8 overflow-y-scroll scrollbar-hidden scroll-smooth "
		>
			<div className="gap-12 items-center flex text-light-gray-700  ">
				<div className=" text-center border-t flex-1 border-light-gray-700 "></div>
				<p className="text-xl font-normal leading-6 ">Today</p>
				<div className=" text-center border-t flex-1 border-light-gray-700  "></div>
			</div>
			{messages?.docs?.map((chat) => (
				<SingleChat key={chat?.id} id={chat?.id} chat={chat?.data()} />
			))}
		</div>
	);
};

export default ChatList;
