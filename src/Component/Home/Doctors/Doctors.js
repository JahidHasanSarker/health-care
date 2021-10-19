import React, { useEffect, useState } from 'react';
import Service from '../ServiceCard/Service';

const Doctors = () => {
    const [services, setServices] = useState([]); 
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setServices(data.slice(0, 6)));
    },[])
    return (
        <div>
            <div id="cards_landscape_wrap-2">
            <h2 className="text-center fw-bold fs-1 pt-5">Our Doctors</h2>
            <div class="container">
                <div class="row">
                {
                services.map(service => <Service key={service.key} service={service}></Service>)
            }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Doctors;