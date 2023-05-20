import React from 'react';
import err from '../../assets/err.gif'
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Error = () => {
    useTitle('ERROR')
    return (
        <div>
            <img className='w-[100vw] h-full' src={err} alt="" />
            

            <Link to='/'>
            <button className='btn-primary w-full'>
                Back to Home
            </button>
            </Link>

        </div>
    );
};

export default Error;