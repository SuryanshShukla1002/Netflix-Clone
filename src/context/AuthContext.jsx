import { createContext, useContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import firebase from 'firebase/compat/app';
const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    function signUp(email, password) {
        
    }

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}