import React, { useContext } from 'react';
import logo from '/vite.webp'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }

    return (
        <div>
            <div className="navbar mt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}><Link to="/alltoys">All Toys</Link></li>
                            <li><Link to="/mytoys">My Toys</Link></li>
                            <li><Link to='/addtoy'>Add A Toy</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><img className='w-[60px] h-[60px] rounded-full' src={logo} alt="" /></Link>
                    <h1 className='text-xl font-bold'>Toggi Toy</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}><Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='lg:flex items-center'>
                                <img className='mr-4 w-16 h-16 rounded-full' src={user?.photoURL} alt="photo" />
                                <button onClick={handleLogout} className=' btn-primary'>Log out</button>
                            </div>
                            :
                            <Link to="/login" className="btn-primary"><button>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;