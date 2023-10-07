import { DotFilledIcon } from '@radix-ui/react-icons';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { FC, useContext, useMemo } from 'react';
import ThumbFilled from '../../assets/chat/thumb-filled.svg';
import ThumbOutline from '../../assets/chat/thumb-outlined.svg';
import DummyUser from '../../assets/dummy-user.svg';
import { UserContext, UserContextType } from '../../context/UserContext';
import { db } from '../../firebase/firebase';
dayjs.extend(LocalizedFormat);

type SingleChatProps = {
	chat: any;
	id: string;
};

const SingleChat: FC<SingleChatProps> = ({ chat, id }) => {
	const { user: loggedinUser } = useContext(UserContext) as UserContextType;
	const { message, timestamp, user, userImage, likes, dislikes } = chat;
	const sender = useMemo(
		() => (loggedinUser?.id === chat?.userId ? true : false),
		[chat?.userId, loggedinUser?.id],
	);
	const alreadyLiked = likes.includes(loggedinUser?.id);
	const alreadyDisliked = dislikes?.includes(loggedinUser?.id);

	const handleLike = () => {
		if (alreadyDisliked) {
			handleDislike();
		}
		if (alreadyLiked) {
			db.collection('messages')
				.doc(id)
				.update({
					likes: [...likes].filter((like) => like !== loggedinUser?.id),
				});
		} else {
			db.collection('messages')
				.doc(id)
				.update({
					likes: [...likes, loggedinUser?.id],
				});
		}
	};

	const handleDislike = () => {
		if (alreadyLiked) {
			handleLike();
		}
		if (alreadyDisliked) {
			db.collection('messages')
				.doc(id)
				.update({
					dislikes: [...dislikes].filter((like) => like !== loggedinUser?.id),
				});
		} else {
			db.collection('messages')
				.doc(id)
				.update({
					dislikes: [...dislikes, loggedinUser?.id],
				});
		}
	};

	const time = new Date(timestamp?.seconds * 1000 + 19800000);
	return (
		<div className={`flex ${sender ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
			<img
				className="w-10 h-10 rounded-full object-cover"
				src={userImage ?? DummyUser}
				alt=""
			/>
			<div className={`flex flex-col gap-4 ${sender && 'items-end'} `}>
				<div className="flex items-center text-base gap-4 ">
					<p className="text-light-blue-800 font-bold ">
						{user.split(' ')[0]} {sender && '(You)'}{' '}
					</p>
					<DotFilledIcon />
					<p className="text-light-gray-700 font-medium ">
						{dayjs(time).format('LT') ?? '--:--'}
					</p>
				</div>
				<div
					className={`flex items-center gap-4 ${sender && 'flex-row-reverse'} `}
				>
					<div
						className={`p-4  rounded-2xl shadow-md ${
							sender
								? 'bg-light-gray-300 rounded-tr-none'
								: 'bg-light-purple-100 rounded-tl-none'
						} `}
					>
						<p className="text-light-blue-800 text-base font-normal leading-6">
							{message}
						</p>
					</div>
					{!sender && (
						<div className="flex gap-3 items-center">
							<img
								onClick={handleLike}
								className="w-6 h-6 object-contain cursor-pointer"
								src={
									likes.includes(loggedinUser?.id) ? ThumbFilled : ThumbOutline
								}
								alt=""
							/>
							<img
								onClick={handleDislike}
								className="w-6 h-6 object-contain transform rotate-180 cursor-pointer "
								src={
									dislikes?.includes(loggedinUser?.id)
										? ThumbFilled
										: ThumbOutline
								}
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
