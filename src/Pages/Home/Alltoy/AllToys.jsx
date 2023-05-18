import React, { useEffect, useState } from 'react';
import Toy from './Toy';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {

    // const [toys, setToys] = useState([]);

    const toys = useLoaderData()

    // useEffect(() => {
    //     fetch('http://localhost:5000/sportstoys')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setToys(data)
    //         })
    // }, [])

    return (
        <div>
            <h1 className='text-3xl font-bold my-6'>Here Are All Toys for you</h1>
            <div>
                <div className=' overflow-x-auto'>
                    <table className=' table w-full'>
                        <thead>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </thead>
                        {
                            toys?.map(toy => (
                                <tbody  key={toy._id}>
                                    <Toy toy={toy} />
                                </tbody>
                            ))
                        }
                        
                    </table>
                </div>

            </div>


        </div>
    );
};

export default AllToys;