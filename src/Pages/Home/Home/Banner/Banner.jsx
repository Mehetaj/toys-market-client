import React from 'react';
import banner from '../../../../assets/633aad0dcb0629168c563ca3-toy-cars-sian-fkp3-metal-model-car-with.avif';

const Banner = () => {
    return (
        <div className='mt-20 p-10 border rounded-xl border-x-white '>
            <img className='w-full mx-auto lg:w-[1000px]' src={banner} alt="" />
            <h2 className='text-2xl text-center my-6 font-bold font-serif'>Welcome to Our Toys Shop</h2>
        </div>
    );
};

export default Banner;