import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToy from './MyToy';

const MyToys = () => {



    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys);

    const handleDeleteToy = (_id) => {
        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                
                const remaining = toys.filter(toy => toy._id !== _id);
                setToys(remaining)
            }
        })
    }

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
                        toys.map(toy => <MyToy handleDeleteToy={handleDeleteToy} key={toy._id} toy={toy}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;