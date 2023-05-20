import React from 'react';
import Banner from './Home/Banner/Banner';
import Gallery from './Home/Gallery/Gallery';
import Tabs from './Tabs/TabsContent';
import FirstSec from './Home/FirstSec/FirstSec';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Tabs></Tabs>
            <FirstSec />
        </div>
    );
};

export default Home;