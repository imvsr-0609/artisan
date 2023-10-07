import { PaperPlaneIcon, UploadIcon, FaceIcon } from '@radix-ui/react-icons';
import { FC, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { UserContext, UserContextType } from '../../context/UserContext';
import { db, fv } from '../../firebase/firebase';
import Picker from 'emoji-picker-react';

const ChatActionForm: FC = () => {
	const [showKeyboard, setShowKeyboard] = useState(false);
	const [message, setMessage] = useState('');
	const emoRef = useRef<any>(null);
	const inputRef = useRef<any>(null);
	const { user } = useContext(UserContext) as UserContextType;

	const onEmojiClick = (emoji: { emoji: string }) => {
		setMessage(message + emoji?.emoji);
	};

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (emoRef.current && !emoRef.current.contains(event.target)) {
				setShowKeyboard(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [emoRef]);

	const sendMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!user) return;
		if (message.length === 0) {
			return;
		}

		// console.log(message);

		db.collection('messages').add({
			message,
			userId: user?.id,
			user: user?.displayName,
			userImage: user?.picture,
			likes: [],
			dislikes: [],
			timestamp: fv.serverTimestamp(),
		});

		setMessage('');
	};
	return (
		<div className="self-end px-12 py-[18px] w-full  bg-light-purple-200 bg-opacity-20 backdrop backdrop-blur-sm  flex flex-col gap-4">
			<div className="flex items-center gap-4 ">
				<p className="font-medium text-light-gray-700 text-sm">
					Suggested Prompts:
				</p>
				{[
					'Set up a new campaign',
					'How can I optimize my campaign?',
					'Edit My Email Sequence',
				].map((prompt, idx) => (
					<div
						key={idx}
						onClick={() => {
							setMessage(message + prompt);
							inputRef.current.focus();
						}}
						className="p-3 px-6 border border-light-purple-300 rounded-lg bg-light-gray-300 shadow-inner-light cursor-pointer "
					>
						<p className="font-semibold text-xs text-light-blue-800">
							{prompt}
						</p>
					</div>
				))}
			</div>
			<div className="flex items-center gap-6">
				<form
					onSubmit={sendMessage}
					className="flex items-center gap-4 w-full relative"
				>
					<div
						onClick={() => setShowKeyboard(true)}
						className="w-10 h-10 rounded-full grid place-items-center border border-light-purple-300 text-light-blue-800 bg-light-gray-300 shadow-inner-light cursor-pointer "
					>
						<FaceIcon />
					</div>
					{showKeyboard && (
						<div ref={emoRef} className="absolute bottom-full left-0">
							<Picker onEmojiClick={onEmojiClick} />
						</div>
					)}

					<input
						ref={inputRef}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						type="text"
						placeholder="Type here.."
						className=" outline-none font-rubik text-base leading-[18px] placeholder:text-light-gray-700 text-light-blue-800 px-6 py-[18px] border border-light-purple-200 rounded-lg w-full flex-1  "
					/>

					<button
						type="submit"
						className="w-10 h-10 rounded-full grid place-items-center border border-light-purple-300 text-light-blue-800 bg-light-gray-300 shadow-inner-light "
					>
						<PaperPlaneIcon />
					</button>
				</form>

				<div className="p-3 px-5 border border-light-purple-300 text-light-blue-800 rounded-lg bg-light-gray-300 shadow-inner-light cursor-pointer flex items-center gap-2  min-w-max ">
					<UploadIcon />
					<p className="font-semibold text-sm ">Upload Files</p>
				</div>
			</div>
		</div>
	);
};

export default ChatActionForm;
