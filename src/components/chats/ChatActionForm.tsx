import React, { FC } from 'react';
import { UploadIcon } from '@radix-ui/react-icons';
import { PaperPlaneIcon } from '@radix-ui/react-icons';

const ChatActionForm: FC = () => {
	return (
		<div className="self-end px-12 py-[18px] w-full  bg-light-purple-200 bg-opacity-20 backdrop backdrop-blur-sm  flex flex-col gap-4">
			<div className="flex items-center gap-4 ">
				<p className="font-medium text-light-gray-700 text-sm">
					Suggested Prompts:
				</p>
				<div className="p-3 px-6 border border-light-purple-300 rounded-lg bg-light-gray-300 shadow-inner-light cursor-pointer ">
					<p className="font-semibold text-xs text-light-blue-800">
						Set up a new campaign
					</p>
				</div>
				<div className="p-3 px-6 border border-light-purple-300 rounded-lg bg-light-gray-300 shadow-inner-light cursor-pointer ">
					<p className="font-semibold text-xs text-light-blue-800">
						How can I optimize my campaign?
					</p>
				</div>
				<div className="p-3 px-6 border border-light-purple-300 rounded-lg bg-light-gray-300 shadow-inner-light cursor-pointer ">
					<p className="font-semibold text-xs text-light-blue-800">
						Edit My Email Sequence
					</p>
				</div>
			</div>
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-4 w-full">
					<input
						type="text"
						placeholder="Type here.."
						className=" outline-none font-rubik text-base leading-[18px] placeholder:text-light-gray-700 text-light-blue-800 px-6 py-[18px] border border-light-purple-200 rounded-lg w-full  "
					/>

					<button className="w-10 h-10 rounded-full grid place-items-center border border-light-purple-300 text-light-blue-800 bg-light-gray-300 shadow-inner-light ">
						<PaperPlaneIcon />
					</button>
				</div>

				<div className="p-3 px-5 border border-light-purple-300 text-light-blue-800 rounded-lg bg-light-gray-300 shadow-inner-light cursor-pointer flex items-center gap-2  min-w-max ">
					<UploadIcon />
					<p className="font-semibold text-sm ">Upload Files</p>
				</div>
			</div>
		</div>
	);
};

export default ChatActionForm;
