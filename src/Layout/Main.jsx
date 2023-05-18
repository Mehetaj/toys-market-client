import React from 'react';
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Home/Shared/Navbar';
import Footer from '../Pages/Home/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='MainLayout'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;