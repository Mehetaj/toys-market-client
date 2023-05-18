import React from 'react';
import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';
import Banner from './Home/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;