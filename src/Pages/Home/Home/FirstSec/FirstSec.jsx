import React from 'react';
import first from '../../../../assets/first.jpg'
import second from '../../../../assets/second.jpg'
import third from '../../../../assets/third.jpg'

const FirstSec = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold my-6 text-center'>New Collection</h1>
            <p className='text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> incididunt ut labore et dolore magna aliqua</p>

            <div className='grid grid-cols-1 my-10 md:grid-cols-2 md:mx-auto lg:grid-cols-3 gap-6 items-center'>
                <div className='border h-72 rounded-xl p-10 text-center'>
                    <img className='w-full lg:w-[300px]' src={first} alt="" />
                    <h2 className='mt-6'>LAMBORGHINI AVENTADOR J in Orange, HW EXOTICS, Car Collector</h2>
                </div>
                <div className='border h-72 rounded-xl p-10 text-center'>
                    <img className=' w-full lg:w-[300px] -mt-20' src={second} alt="" />
                    <h2 className=' -mt-14'>LAMBORGHINI AVENTADOR J in Orange, HW EXOTICS, Car Collector</h2>
                </div>
                <div className='w-full border h-72 rounded-xl p-10 text-center'>
                    <img className='w-full lg:w-[300px] mx-auto' src={third} alt="" />
                    <h2 className='mt-6'>LAMBORGHINI AVENTADOR J in Orange, HW EXOTICS, Car Collector</h2>
                </div>
            </div>
            
        </div>
    );
};

export default FirstSec;