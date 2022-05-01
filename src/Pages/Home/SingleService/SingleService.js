import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { _id, name, img, price, description } = service;
    console.log(_id)

    const navigate = useNavigate()
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='singleService'>
            <img className='w-100' src={img} alt="Car services" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)}>Book: {name}</button>
        </div>
    );
};

export default SingleService;