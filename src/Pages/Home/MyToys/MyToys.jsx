import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {



    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys);

    const handleDeleteToy = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/posts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: ' center',
                                icon: 'success',
                                title: 'Deleted Succesfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const remaining = toys?.filter(toy => toy._id !== _id);
                            setToys(remaining)
                        }
                    })
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
                        toys?.map(toy => <MyToy handleDeleteToy={handleDeleteToy} key={toy._id} toy={toy} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;