import React from 'react';
import banner from '../../../../assets/633aad0dcb0629168c563ca3-toy-cars-sian-fkp3-metal-model-car-with.avif';

const Banner = () => {
    return (
        <div className='mt-20 p-10 border rounded-xl border-x-white '>
            <img className='w-full mx-auto lg:w-[1000px]' src={banner} alt="" />
            <h2 className='text-2xl text-center my-6 font-bold font-serif'>Welcome to Our Toys Shop</h2>
            <p className='w-1/2  text-center font-sans mx-auto'>Growing up we have all played with different kinds of toys. Toys are the most precious things for many kids. These toys not only entertain children but also help to keep them engaged and spark their imagination and creativity. Many Toy Shops in Vadodara sell a variety of toys. They also have a trained staff that can guide you in purchasing the best toy for your child as per their age.</p>
        </div>
    );
};

export default Banner;