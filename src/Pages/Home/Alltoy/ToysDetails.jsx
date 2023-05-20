import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const ToysDetails = () => {
    

    // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description

    const toy = useLoaderData()
    // console.log(toy);
    const { picture, name, price, ratings, quantity, description } = toy;
    const rating = parseInt(ratings)

    const { user } = useContext(AuthContext)
    useTitle(`${name} Details`)

    return (
        <div>
            <div className='border rounded-lg my-36 bg-base-200 p-10 flex items-center justify-around'>
                <img src={picture} className='w-96' alt="Car Image" />
                <div>
                    <h1 className='text-3xl font-bold'>Seller Information</h1>
                    <h2 className='text-xl mb-4'>Seller Name: {user?.displayName}</h2>
                    <h2 className='text-xl my-4'>Seller Name: {user?.email}</h2>
                </div>
                <div>
                    <p className='text-3xl font-bold font-serif'>{name}</p>
                    <p className='my-2'>Available Quantity:  {quantity}</p>
                    <p className='my-2'>Price: {price}</p>
                    <p className='w-96 my-3'>{description}</p>
                    <div className='flex items-center'>
                        <p>Ratings: </p>
                        <Rating value={rating} readOnly style={{ width: '100px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;