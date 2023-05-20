import React, { useEffect } from 'react';
import img from '../../../../assets/col.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const SecondSec = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    },[])
    return (
        <div  className='lg:flex justify-evenly my-20'>
            <img data-aos="slide-up" className='w-[400px]' src={img} alt="" />
            <div data-aos="slide-up">
                <h1 className='text-3xl font-bold font-serif'>This is Our Awesome Collection For You</h1>
                <p className='w-[500px] my-4 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea id laboriosam adipisci nulla at. Vero tenetur assumenda animi similique eius molestiae dolorem, sequi quis non provident! Nobis mollitia suscipit sapiente pariatur cumque facilis animi explicabo, praesentium qui dolores eius quia!.mollitia suscipit sapiente pariatur cumque facilis animi explicabo, praesentium qui dolores eius quia!</p>
            </div>
        </div>
    );
};

export default SecondSec;