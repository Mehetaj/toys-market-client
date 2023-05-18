import React from 'react';
import { Rating } from '@smastrom/react-rating';

const SportsCar = ({ sport }) => {
    console.log(sport);
    const { picture, name, price, ratings } = sport
    const rating = parseInt(ratings)
    return (
        <div className='border p-6 border-black rounded-lg'>
            <img className='w-80' src={picture} alt="" />
            <h2 className='my-4 text-2xl font-mono'>{name}</h2>
            <p>Price: {price}</p>
            <div className='flex items-center my-3'>
                <p>Rating:</p>
            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readonly
                
            />
            </div>
            <button className='btn-primary w-full mt-4'>View Details</button>
        </div>
    );
};

export default SportsCar;