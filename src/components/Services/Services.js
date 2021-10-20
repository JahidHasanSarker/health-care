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
                        <div className="d-flex justify-content-between align-items-center mb-5">
                                <div className="">
                                    <h3 className="error-text">Service Page</h3>
                                    <p className="my-4">This page is just for all doctors information <br/> and qualification with so many things.</p>
                                </div>
                                <div className="my-5 ms-5">
                                    <img height="300px" width="300px" src="https://templates.envytheme.com/medip/default/assets/images/page-banner/banner-2.png" alt="" />
                                </div>
                                
                        </div>
                        </Container>
 
            </div>

        <div id="cards_landscape_wrap-2">
            <div className="container">
                <div className="row">
                {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
                </div>
            </div>
        </div>
        </div>

    );
};


export default Services;

