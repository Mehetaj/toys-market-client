import React from 'react';
import Banner from './Home/Banner/Banner';
import Gallery from './Home/Gallery/Gallery';
import Tabs from './Tabs/TabsContent';
import FirstSec from './Home/FirstSec/FirstSec';
import SecondSec from './Home/FirstSec/SecondSec';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('')
    return (
        <div>
            <Banner />
            <Gallery />
            <Tabs></Tabs>
            <FirstSec />
            <SecondSec />
        </div>
    );
};

export default Home;