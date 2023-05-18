import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../../../assets/d6165fab438f6f58263c2376bc754f0b51676887.gif'
import { AuthContext } from '../../../../Authprovider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../../Firebase/Firebase';
import PopupLogin from '../../Shared/PopupLogin';

const Signup = () => {
    const [error, setError] = useState('')

    const auth = getAuth(app)

    const { createUser } = useContext(AuthContext)

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.image.value;

        if (password < 6) {
            return setError('Password Must be 6 characters')
        }

        // console.log(name,email,password,photo);

        createUser(email, password)
            .then((result) => {
                // console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(err => {
                // console.log(err.message);
                setError(err.message)
            })
    }

    return (
        <div className='flex items-center'>
            <div>
                <img className='w-[450px]' src={signup} alt="" />
            </div>
            <div className='w-[30%] border rounded-lg my-36 border-gray-600 p-14 mx-auto'>
                <h2 className='text-2xl font-bold my-8'>Sign Up Here</h2>
                <form onSubmit={handleSignup}>
                    <div className="relative z-0 w-full my-10 group">
                        <input type="text" name="name" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>
                    <div className="relative z-0 w-full my-10 group">
                        <input type="email" name="email" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full my-10 group">
                        <input type="password" name="password" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full my-10 group">
                        <input type="text" name="image" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                    </div>
                    <input type="submit" value="Sign Up" className='btn-primary w-full' />
                    <p><small>Already Have an Account? <Link className=' text-gray-400' to="/login">Login Here</Link></small></p>

                    <p className='text-red-500 my-3'><small>{error}</small></p>
                </form>
                <PopupLogin />
            </div>
        </div>
    );
};

export default Signup;