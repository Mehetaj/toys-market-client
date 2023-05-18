import React from 'react';
import Banner from './Home/Banner/Banner';
import Gallery from './Home/Gallery/Gallery';
import Tabs from './Tabs/TabsContent';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Tabs></Tabs>
        </div>
    );
};

export default Home;