
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';


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
                                    <div className="d-flex">
                                        <div className="mt-5">
                                            <img className="img-radious" height="500px" src={ExactIteam?.img} alt="" />
                                        </div>
                                        <div className="mt-5">
                                            
                                            <h1>This is service Detail Page </h1>
                                            <h3>Name : {ExactIteam[0]?.name}</h3>
                                            <h3>Title : {ExactIteam[0]?.title}</h3>
                                            <p>description : {ExactIteam[0]?.qualification}</p>
                                        
                                        
                                        </div>
                                    </div>
                                    </Container>
                            </div>
    );
};

export default ServiceDetail;



