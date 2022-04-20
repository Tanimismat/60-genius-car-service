import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to detail : {serviceId}</h2>
            <button><Link to='/checkout'>Proceed checkout</Link></button>
        </div>
    );
};

export default ServiceDetail;