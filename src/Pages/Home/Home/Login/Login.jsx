import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../../assets/login.gif'
import { AuthContext } from '../../../../Authprovider/AuthProvider';
import PopupLogin from '../../Shared/PopupLogin';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'

    const [error, setError] = useState('')

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        if (password < 6) {
            return setError('Password not matched')
        }


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate(from,{replace: true})
            })
            .catch(err => {
                // console.log(err.message);
                setError(err.message)
            })
    }

    return (
        <div className='w-full my-20'>
            <div className='flex items-center justify-evenly'>
                <div>
                    <img src={login} alt="" />
                </div>
                <form onSubmit={handleLogin} className='w-[30%]  border rounded-lg  my-36 border-gray-600 p-14 mx-auto'>
                    <h2 className='text-2xl font-bold my-8'>Login Here</h2>

                    <div className="relative z-0 w-full my-10 group">
                        <input type="email" name="email" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full my-10 group">
                        <input type="password" name="password" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <input type="submit" value="Login" className='btn-primary w-full' />
                    <p className='my-4'><small>Don't have an Account? <Link className='text-gray-400' to="/signup">Sign up here </Link></small></p>

                    <p className='my-4 text-red-600'><small>{error}</small></p>
                <PopupLogin />
                </form>
            </div>
        </div>
    );
};

export default Login;