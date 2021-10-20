import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id="about">
           <Container>
           <h2 className="text-center fw-bold fs-1 py-5">About Us</h2>
           <Row>
                <Col md={6} sm={12}>
                    <div className="me-5">
                        <img width="500px" src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/2019/09/doctors-1.png" alt=""/>
                    </div>
                </Col>




            <Col md={6} sm={12}>
                <div className="mx-4 mt-5 about-info text-center">
                    <h4 className="fw-bold my-4">Enhancing Health Excelling in Care.</h4>
                    <p className="text-muted">Our core technologies are internationally recognized as leading edge and we continue to spearhead technology development to maintain our significant lead in all fields.</p>
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <div className="me-5 ">
                            <p><FontAwesomeIcon className="me-2" icon={faCheckCircle} />Ophthalmologist</p>
                            <p><FontAwesomeIcon className="me-2" icon={faCheckCircle} />Periodontology</p>
                            <p><FontAwesomeIcon className="me-2" icon={faCheckCircle} />Neurology</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon className="me-2" icon={faCheckCircle} />Orthopedics</p>
                            <p><FontAwesomeIcon className="me-2" icon={faCheckCircle} />Cardiology</p>
                            <p><FontAwesomeIcon className="me-2" icon={faCheckCircle} />Dental Surgeon</p>
                            
                        </div>
                    </div>
                </div>
            </Col>
            
            </Row>
           </Container>
        </div>
    );
};

export default About;