import React, { useEffect, useState } from 'react';
import Service from '../ServiceCard/Service';

const Services = () => {
    const [services, setServices] = useState([]); 
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        
        <div id="cards_landscape_wrap-2">
            <div className="container">
                <div className="row">
                {
                services.map(service => <Service key={service.key} service={service}></Service>)
            }
                </div>
            </div>
        </div>

    );
};


export default Services;

