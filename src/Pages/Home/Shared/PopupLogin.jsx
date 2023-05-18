import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/AuthProvider';

const PopupLogin = () => {

    const { googleAuth } = useContext(AuthContext)

    const handleGoogleLogin = () =>  {
        googleAuth()
    }   

    return (
        <div>
            <h2 className='font-bold text-center my-4'>OR</h2>
            <button onClick={handleGoogleLogin} className='w-full'>
                <div className='border flex items-center justify-evenly border-blue-600 py-2 px-10 rounded-lg'>
                    <img className='w-6' src="https://i.ibb.co/b7LWJKk/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="Illustration-of-Google-icon-on-transparent-background-PNG" border="0" />
                    <p>Continue With GOOGLE</p>
                </div>
            </button>
        </div>
    );
};

export default PopupLogin;