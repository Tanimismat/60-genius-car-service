import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId} `
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div>
            <h3>You are about to book : {service.name}</h3>
            <button><Link to='/checkout'>Proceed checkout</Link></button>
        </div>
    );
};

export default ServiceDetail;