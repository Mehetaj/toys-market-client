import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToy from './MyToy';

const MyToys = () => {

    const toys = useLoaderData();
    console.log(toys);

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold'>These Toys are added By you </h1>

            <div className='mt-20'>
                <div className='grid p-4 bg-base-200 grid-cols-7'>
                    <p>Seller Name</p>
                    <p>Toy Name</p>
                    <p>Sub-Category</p>
                    <p>Price</p>
                    <p>Available Quantity</p>
                    <p>Delete</p>
                    <p>Update</p>
                </div>
                <div>
                    {
                        toys.map(toy => <MyToy key={toy._id} toy={toy}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;