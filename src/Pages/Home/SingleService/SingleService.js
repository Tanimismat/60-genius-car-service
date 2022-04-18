import React from 'react';

const SingleService = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='singleService'>
            <img src={img} alt="Car services" />
            <h2>single service {name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default SingleService;