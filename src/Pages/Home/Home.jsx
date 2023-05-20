import React from 'react';
import Banner from './Home/Banner/Banner';
import Tabs from './Tabs/TabsContent';
import FirstSec from './Home/FirstSec/FirstSec';
import SecondSec from './Home/FirstSec/SecondSec';
import useTitle from '../../Hooks/useTitle';
import Galary from './Home/Gallery/Galary';

const Home = () => {
    useTitle('')
    return (
        <div>
            <Banner />
            <Galary />
            <Tabs></Tabs>
            <FirstSec />
            <SecondSec />
        </div>
    );
};

export default Home;