import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/AuthProvider';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    // console.log(toy);
    const { price, name, sub_category
        , quantity, _id } = toy;
    const { user } = useContext(AuthContext)
    // console.log(toy);



    return (
        <tr>
            <td>{user?.displayName}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className='btn-primary'><Link to={`/alltoys/${_id}`}>View Details</Link></button></td>
        </tr>
    );
};

export default Toy;