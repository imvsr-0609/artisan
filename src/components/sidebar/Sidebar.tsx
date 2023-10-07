import React, { FC, useContext, useState, useRef, useEffect } from 'react';
import ArtisanIcon from '../../assets/artisan-logo.svg';
import DummyUser from '../../assets/dummy-user.svg';
import activeNav from '../../assets/nav-active.svg';
import activeNavLight from '../../assets/nav-active-light.svg';
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
	const [activetab, setActiveTab] = useState(1);

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
		<div className="flex flex-col gap-6 items-center min-w-[260px] bg-light-purple-300 dark:bg-light-blue-900 text-white  py-6 px-4 ">
			<div className="flex flex-col gap-4 justify-between items-center">
				<img className="w-16 object-contain " src={ArtisanIcon} alt="" />

				<div className=" flex gap-4 items-center justify-center w-full ">
					<h4
						className={`font-medium text-xs leading-5 ${
							!appThemeLight && 'opacity-50'
						} `}
					>
						Light
					</h4>
					<div
						onClick={toggleTheme}
						className={`w-10 h-6 rounded-full bg-light-purple-150 dark:bg-light-purple-350 p-1 cursor-pointer flex ${
							appThemeLight ? 'justify-start' : 'justify-end'
						} `}
					>
						<div className="w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-200 ease-in-out "></div>
					</div>
					<h4
						className={`font-medium text-xs leading-5 ${
							appThemeLight && 'opacity-50'
						} `}
					>
						Dark
					</h4>
				</div>
			</div>

			<div className="p-3 px-4 flex items-center gap-3 bg-light-purple-200 dark:bg-transparent dark:bg-gradient-to-r from-light-blue-800  to-light-purple-300/20 rounded-lg border border-light-purple-300 relative">
				<div className="flex gap-2 items-center ">
					<img
						src={user?.picture ?? DummyUser}
						className="w-10 h-10 object-contain rounded-full"
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
							className="bg-light-purple-200 dark:bg-light-purple-350 p-2 shadow rounded-sm -translate-y-2"
						>
							Logout
						</button>
					</div>
				)}
			</div>

			<div className="w-52 border-b border-light-gray-300 border-opacity-50 -mt-1 "></div>

			<div className="flex flex-col gap-5 pl-2 overflow-y-scroll scrollbar-hidden">
				{navigationTabs.map((nav, idx) => {
					const isActive = activetab === nav.id;
					return (
						<div
							key={idx}
							onClick={() => setActiveTab(nav.id)}
							className="flex items-center gap-4 cursor-pointer relative "
						>
							<img
								className="w-5 h-5 object-contain"
								src={nav.icon}
								alt={nav.title}
							/>
							<h4 className="font-medium text-sm leading-5 ">{nav.title}</h4>
							{isActive && (
								<img
									src={appThemeLight ? activeNavLight : activeNav}
									alt=""
									className="absolute top-full inset-x-0 -translate-y-3 -translate-x-2 "
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
