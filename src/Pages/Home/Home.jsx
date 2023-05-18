import React from 'react';
import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';
import Banner from './Home/Banner/Banner';
import Gallery from './Home/Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
        </div>
    );
};

export default Home;