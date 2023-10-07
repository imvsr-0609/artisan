import { useContext } from 'react';
import UserProvider, {
	UserContext,
	UserContextType,
} from './context/UserContext';
import AppLayout from './layout/AppLayout';
import AuthPage from './pages/auth/AuthPage';

function App() {
	const { user } = useContext(UserContext) as UserContextType;
	return <>{user?.email ? <AppLayout /> : <AuthPage />}</>;
}

export default App;
