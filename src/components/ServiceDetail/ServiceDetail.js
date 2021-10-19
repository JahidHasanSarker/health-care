
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const ExactIteam = data.filter(td => td._id === id);
    return (
        <div>
                <div className="error-bg w-100">
                        <Container>
                        <div className="d-flex justify-content-center align-items-center mb-5">
                                <div className="me-5 pe-5">
                                    <h2 className="error-text">Details Page</h2>
                                    <p className="me-5 pe-5">This page is just for all doctors information and qualification with so many things.</p>
                                </div>
                                <div className="my-5">
                                    <img height="300px" src="https://templates.envytheme.com/medip/default/assets/images/page-banner/banner-2.png" alt="" />
                                </div>
                                
                        </div>
                        </Container>
 
            </div>
                    <Container>
                    <div className="d-flex">
                        <div className="m-5">
                            <img className="img-radious" height="500px" src={ExactIteam[0]?.img} alt="" />
                        </div>
                        <div className="m-5">
                            
                            <h1>This is service Detail Page </h1>
                            <h3>Name : {ExactIteam[0]?.title}</h3>
                            <h3>price : {ExactIteam[0]?.name}</h3>
                            <h3>description : {ExactIteam[0]?.qualification}</h3>
                            <h3>description : {ExactIteam[0]?.awards}</h3>
                            <h3>description : {ExactIteam[0]?.patients}</h3>
                            <h3>description : {ExactIteam[0]?.text}</h3>
                        
                        </div>
                    </div>
                    </Container>
        </div>
    );
};

export default ServiceDetail;



