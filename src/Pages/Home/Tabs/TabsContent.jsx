import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import SportsCar from './SportsCar';

const TabsContnet = () => {

  const [sportsCar, setSportsCar] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/sportstoys')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setSportsCar(data)
      })
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-bold my-6'>Shop</h1>
      <Tabs className="border p-10">
        <TabList>
          <Tab>Regular Car</Tab>
          <Tab>Sports Car</Tab>
          <Tab>Fire Truck</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <div className='flex justify-evenly items-center'>
            {
              sportsCar.map(sport => <SportsCar sport={sport} key={sport._id} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsContnet;