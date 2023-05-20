import React from 'react';
import img1 from '../../../../assets/toys/bus.jpg'
import img2 from '../../../../assets/toys/fire.jpg'
import img3 from '../../../../assets/toys/police.jpg'
import img4 from '../../../../assets/toys/regular.webp'
import img5 from '../../../../assets/toys/sports.jpg'
import img6 from '../../../../assets/toys/truck.jpg'

const Galary = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img1} alt="" />
            <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img2} alt="" />
            <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img3} alt="" />
            <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img4} alt="" />
            <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img5} alt="" />
            <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img6} alt="" />
        </div>
    );
};

export default Galary;