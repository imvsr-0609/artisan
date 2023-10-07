import { useContext } from 'react';
import UserProvider, {
	UserContext,
	UserContextType,
} from './context/UserContext';
import AppLayout from './layout/AppLayout';
import AuthPage from './pages/auth/AuthPage';
import { ThemeContext } from './context/ThemeContext';

function App() {
	const { user } = useContext(UserContext) as UserContextType;
	const { appThemeLight } = useContext(ThemeContext);
	return (
		<div className={!appThemeLight && 'dark'}>
			{user?.email ? <AppLayout /> : <AuthPage />}
		</div>
	);
}

export default App;
