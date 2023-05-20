import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const SportsCar = ({ sport }) => {
    // console.log(sport);
    const { picture, name, price, ratings ,_id } = sport
    const rating = parseInt(ratings)
    return (
        <div className='border my-6 lg:my-0 p-2 lg:p-6 border-black rounded-lg'>
            <img className='w-full lg:w-80' src={picture} alt={`Image of ${name}`} />
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
            <button className='btn-primary w-full'>
            <Link to={`/alltoys/${_id}`} >View Details</Link>
            </button>
        </div>
    );
};

export default SportsCar;