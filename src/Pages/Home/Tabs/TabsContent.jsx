import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import SportsCar from './SportsCar';

const TabsContnet = () => {

  const [sportsCar, setSportsCar] = useState([]);
  useEffect(() => {
    fetch('https://toys-server-eight.vercel.app/sportstoys')
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
          <Tab>Sports Car</Tab>
          <Tab>Regular Car</Tab>
          <Tab>Police Car</Tab>
        </TabList>

        <TabPanel>
          <div className=' mt- lg:flex justify-evenly items-center'>
            {
              sportsCar.slice(0, 2).map(sport => <SportsCar sport={sport} key={sport._id} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='lg:flex justify-evenly items-center'>
            {
              sportsCar.slice(2, 4).map(sport => <SportsCar sport={sport} key={sport._id} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='lg:flex justify-evenly items-center'>
            {
              sportsCar.slice(4, 6).map(sport => <SportsCar sport={sport} key={sport._id} />)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsContnet;