import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';

const Gallery = () => {

    const [imgs, setImgs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/imgs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImgs(data)
            })
    }, [])

    return (
        <div className='my-20'>
            <h1 className='text-3xl my-10 font-bold '>Our Gallery</h1>
            <div className='grid items-center grid-cols-3'>
                {
                    imgs?.map((img) => <GalleryCard img={img} key={img.id}/>)
                }
            </div>
        </div>
    );
};

export default Gallery;
