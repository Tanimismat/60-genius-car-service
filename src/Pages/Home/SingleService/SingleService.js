import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { id, name, img, price, description } = service;

    const navigate = useNavigate()
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='singleService'>
            <img className='w-100' src={img} alt="Car services" />
            <h2>single service {name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)}>Book: {name}</button>
        </div>
    );
};

export default SingleService;