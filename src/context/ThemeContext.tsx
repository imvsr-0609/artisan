import React, { FC, createContext, useEffect, useState } from 'react';

type ThemeContextType = {
	appThemeLight: boolean;
	toggleTheme: () => void;
};

interface Props {
	children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: FC<Props> = ({ children }) => {
	const [appThemeLight, setAppThemeLight] = useState(() => {
		const darkMode = localStorage.getItem('dark_mode');
		if (darkMode === null) {
			return;
		} else {
			return JSON.parse(darkMode);
		}
	});

	const toggleTheme = () => {
		setAppThemeLight(!appThemeLight);
	};

	useEffect(() => {
		localStorage.setItem('dark_mode', JSON.stringify(appThemeLight));
	}, [appThemeLight]);

	return (
		<ThemeContext.Provider value={{ appThemeLight, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
