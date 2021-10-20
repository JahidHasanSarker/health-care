import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './ServiceDetails.css'


const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setData(data))
        
    },[])

    const ExactIteam = data.filter(td => td.id === id);
   
    
    return (
        <div>
                <div className="error-bg w-100">
                    	<Container>
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                    <div className="">
                                        <h3 className="error-text">Details Page</h3>
                                        <p className="my-4">This page is just for all doctors information <br/> and qualification with so many things.</p>
                                    </div>
                                    <div className="my-5 ms-5">
                                        <img height="300px" width="300px" src="https://templates.envytheme.com/medip/default/assets/images/page-banner/banner-2.png" alt="" />
                                    </div>
                                    
                            </div>
                        </Container>
 
                            </div>
                                    <Container>
                                        <Row>
                                            
                                                <Col md={6} sm={12}>
                                                    <div className="my-5 text-center img-radious">
                                                        <img className="shadow-lg" height="400px" src={ExactIteam[0]?.img} alt="" />
                                                    </div>
                                                </Col>

                                                <Col md={6} sm={12}>
                                                    <div className="mt-5">
                      
                                                        <h1 className="fw-bold pt-2">Dr. {ExactIteam[0]?.name}</h1>
                                                        <h6>{ExactIteam[0]?.title} Specialist</h6>
                                                        <div className="details-info my-5">
                                                            <p className="text-muted">({ExactIteam[0]?.certification})</p>
                                                            <p>Qualification  <span>{ExactIteam[0]?.qualification}</span></p>
                                                            <p>Awards  <span>{ExactIteam[0]?.awards}</span></p>
                                                            <p>{ExactIteam[0]?.patients}</p>
                                                            <p className="text-muted fw-normal pt-4">{ExactIteam[0]?.text}</p>
                                                        </div>
                                                        
                                                    </div>
                                                </Col>
                                            
                                        </Row>
                                    </Container>
                            </div>
    );
};

export default ServiceDetail;



