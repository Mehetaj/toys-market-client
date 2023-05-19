import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/AuthProvider';

const ToysDetails = () => {

    // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description

    const toy = useLoaderData()
    // console.log(toy);
    const { picture, name, price,ratings,quantity,description } = toy;
    const rating = parseInt(ratings)

    const {user} = useContext(AuthContext)

    return (
        <div>
            <div className="card h-[800px] lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-[800px] p-10 mt-10' src={picture} alt="Album" /></figure>
                <div className="card-body mt-72">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <div>
                    <p>Available Quantity:  {quantity}</p>
                    <p className='w-1/2 my-4'>{description}</p>

                    <div className='mt-10'>
                        <h2 className='text-3xl font-bold'>Seller Information</h2>
                        <p className='text-xl mt-4'>Seller Name: {user?.displayName}</p>
                        <p className='text-xl mt-4'>Seller Mail: {user?.email}</p>
                    </div>
                    </div>
                    <div className="card-actions  justify-between mt-auto">
                        <div className=''>
                        <p className='mr-3'>Price: {price}</p>
                        <p className='flex items-center'>Ratings: <Rating readOnly style={{width: '100px'}} value={rating}/></p>
                        </div>
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;