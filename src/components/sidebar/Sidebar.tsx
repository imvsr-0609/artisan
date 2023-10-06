import React, { FC } from 'react';
import ArtisanIcon from '../../assets/artisan-logo.svg';
import DummyUser from '../../assets/dummy-user.svg';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import { navigationTabs } from '../../helpers/constants/navigationConstant';

type SidebarProps = {
	user: any;
};

const Sidebar: FC<SidebarProps> = ({ user }) => {
	return (
		<div className="flex flex-col gap-5 items-center min-w-[260px] bg-light-purple-300 text-white  pt-6 pb-12 px-4 ">
			<img className="w-[140px] object-contain " src={ArtisanIcon} alt="" />

			<div className="p-3 px-4 flex items-center gap-3 bg-light-purple-200 rounded-lg border border-light-purple-300">
				<div className="flex gap-2 items-center ">
					<img src={DummyUser} className="w-10 h-10 object-contain" alt="" />
					<div className="flex flex-col">
						<h3 className="text-base font-medium ">Ava</h3>
						<p className="text-sm font-light leading-4">Sales Representative</p>
					</div>
				</div>
				<TriangleDownIcon />
			</div>

			<div className="w-52 border-b border-light-gray-300 border-opacity-50 -mt-1 "></div>

			<div className="flex flex-col gap-8 pl-4 mt-5 overflow-y-scroll scrollbar-hidden">
				{navigationTabs.map((nav, idx) => (
					<div key={idx} className="flex items-center gap-4 cursor-pointer ">
						<img
							className="w-6 h-6 object-contain"
							src={nav.icon}
							alt={nav.title}
						/>
						<h4 className="font-medium text-base leading-5 ">{nav.title}</h4>
					</div>
				))}
			</div>

			<div className="mt-14 flex gap-4 items-center justify-center w-full ">
				<h4 className={`font-medium text-base leading-5 `}>Light</h4>
				<div className="w-18 h-8 rounded-full bg-light-purple-150 p-1 ">
					<div className="w-6 h-6 rounded-full bg-white shadow-lg"></div>
				</div>
				<h4 className={`font-medium text-base leading-5 `}>Dark</h4>
			</div>
		</div>
	);
};

export default Sidebar;
