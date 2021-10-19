import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
           <Container>
           <h2 className="text-center fw-bold fs-1 py-5">About Us</h2>
            <div className="d-flex">
                <div className="me-5">
                    <img src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/2019/09/doctors-1.png" alt=""/>
                </div>

                <div className="ms-5 mt-4">
                    <h4 className="fw-bold my-4">Enhancing Health Excelling in Care.</h4>
                    <p className="text-muted">Our core technologies are internationally recognized as leading edge and we continue to spearhead technology development to maintain our significant lead in all fields.</p>
                    <div className="d-flex my-5">
                        <div className="me-5">
                            <h6>Natoque penatibus et magnis</h6>
                            <h6>Natoque penatibus et magnis</h6>
                            <h6>Natoque penatibus et magnis</h6>
                            <h6>Natoque penatibus et magnis</h6>
                        </div>
                        <div>
                            <h6>Natoque penatibus et magnis</h6>
                            <h6>Natoque penatibus et magnis</h6>
                            <h6>Natoque penatibus et magnis</h6>
                            <h6>Natoque penatibus et magnis</h6>
                        </div>
                    </div>
                </div>
            </div>
           </Container>
        </div>
    );
};

export default About;