import React, { FC, useContext, useState, useRef, useEffect } from 'react';
import ArtisanIcon from '../../assets/artisan-logo.svg';
import DummyUser from '../../assets/dummy-user.svg';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import { navigationTabs } from '../../helpers/constants/navigationConstant';
import { UserContext } from '../../context/UserContext';
import { ThemeContext } from '../../context/ThemeContext';

type SidebarProps = {
	user: any;
};

const Sidebar: FC<SidebarProps> = ({ user }) => {
	const { logout } = useContext(UserContext);
	const menuRef = useRef<any>(null);
	const [showDropdown, setShowDropdown] = useState(false);
	const { appThemeLight, toggleTheme } = useContext(ThemeContext);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuRef]);

	return (
		<div className="flex flex-col gap-5 items-center min-w-[260px] bg-light-purple-300 text-white  pt-6 pb-12 px-4 ">
			<img className="w-[140px] object-contain " src={ArtisanIcon} alt="" />

			<div className="p-3 px-4 flex items-center gap-3 bg-light-purple-200 rounded-lg border border-light-purple-300 relative">
				<div className="flex gap-2 items-center ">
					<img
						src={user?.picture ?? DummyUser}
						className="w-10 h-10 object-contain"
						alt=""
					/>
					<div className="flex flex-col">
						<h3 className="text-base font-medium ">
							{user?.displayName.split(' ')[0]}
						</h3>
						<p className="text-sm font-light leading-4">Sales Representative</p>
					</div>
				</div>
				<TriangleDownIcon
					onClick={() => setShowDropdown(true)}
					className="cursor-pointer"
				/>
				{showDropdown && (
					<div
						ref={menuRef}
						className="absolute flex flex-col top-full right-0 "
					>
						<button
							onClick={logout}
							className="bg-light-purple-200 p-2 shadow rounded-sm -translate-y-2"
						>
							Logout
						</button>
					</div>
				)}
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
				<h4
					className={`font-medium text-base leading-5 ${
						!appThemeLight && 'opacity-50'
					} `}
				>
					Light
				</h4>
				<div
					onClick={toggleTheme}
					className={`w-18 h-8 rounded-full bg-light-purple-150 p-1 cursor-pointer flex ${
						appThemeLight ? 'justify-start' : 'justify-end'
					} `}
				>
					<div className="w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-200 ease-in-out "></div>
				</div>
				<h4
					className={`font-medium text-base leading-5 ${
						appThemeLight && 'opacity-50'
					} `}
				>
					Dark
				</h4>
			</div>
		</div>
	);
};

export default Sidebar;
