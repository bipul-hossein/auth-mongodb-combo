import React, { createContext} from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup,getAuth, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();


const signInWithGoogle =(provider)=>{
  return  signInWithPopup(auth,googleProvider);
}

const googleSignOut =()=>{
return signOut (auth)
}

const authInfo ={signInWithGoogle,googleSignOut}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;