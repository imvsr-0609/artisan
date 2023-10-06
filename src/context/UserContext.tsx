import React, {
	useState,
	useEffect,
	createContext,
	FC,
	ReactNode,
} from 'react';
import { auth, provider } from '../firebase/firebase';

export type UserContextType = {
	user: any;
	loadingUser: boolean;
	logout: () => void;
	signInWithGoogle: () => void;
};

type Props = {
	children: ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: FC<Props> = (props) => {
	const getUser = () => {
		const data = localStorage.getItem('user');
		if (data) {
			return JSON.parse(data);
		} else {
			return null;
		}
	};

	const [user, setUser] = useState(getUser);
	const [loadingUser, setLoadingUser] = useState(true);

	const signInWithGoogle = () => {
		auth.signInWithPopup(provider).catch((error: any) => {
			alert(error.message);
		});
	};
	const logout = () => {
		auth
			.signOut()
			.then(() => {
				setUser(null);
				localStorage.clear();
			})
			.catch((error: any) => {
				alert(error.message);
			});
	};

	useEffect(() => {
		auth.onAuthStateChanged(async (user: any) => {
			await setUser({
				displayName: user?.displayName,
				email: user?.email,
				id: user?.uid,
				picture: user?.photoURL,
			});
			localStorage.setItem('user', JSON.stringify(user));
			setLoadingUser(false);
		});
	}, []);

	return (
		<UserContext.Provider
			value={{ user, signInWithGoogle, logout, loadingUser }}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
