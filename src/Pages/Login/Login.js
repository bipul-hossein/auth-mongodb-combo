import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signInWithGoogle, googleSignOut } = useContext(AuthContext)

    const handleToGoogleLogin = () => {

        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch(error => console.error(error))

    };
    const handleToSignOut = () => {

        googleSignOut()
            .then(result => {

            }).catch(error => console.error(error))

    }
    return (
        <div>
            <button onClick={handleToGoogleLogin}>google login</button>
            <button onClick={handleToSignOut}>google Out</button>
            <p></p>
        </div>
    );
};

export default Login;