import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // console.log(services)

    return (
        <div id='services' className='container'>
            <h2 className='services-title'>Our Services</h2>

            <div className='services-container'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;