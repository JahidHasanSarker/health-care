import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]); 
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className="error-bg w-100">
                        <Container>
                        <div className="d-flex justify-content-center align-items-center mb-5">
                                <div className="me-5 pe-5">
                                    <h2 className="error-text">Service Page</h2>
                                    <p className="me-5 pe-5">This page is just for all doctors information and qualification with so many things.</p>
                                </div>
                                <div className="my-5">
                                    <img height="300px" src="https://templates.envytheme.com/medip/default/assets/images/page-banner/banner-2.png" alt="" />
                                </div>
                                
                        </div>
                        </Container>
 
            </div>

        <div id="cards_landscape_wrap-2">
            <div className="container">
                <div className="row">
                {
                services.map(service => <Service key={service.key} service={service}></Service>)
            }
                </div>
            </div>
        </div>
        </div>

    );
};


export default Services;

