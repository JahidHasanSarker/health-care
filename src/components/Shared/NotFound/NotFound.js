import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Notfound.css'

const NotFound = () => {
    return (
        <div>
            <div className="error-bg w-100">
                        <Container>
                        <div className="d-flex justify-content-center align-items-center my-5">
                                <div className="me-5 pe-5">
                                    <h2 className="error-text">404 Error</h2>
                                    <p className="me-5 pe-5">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                </div>
                                <div className="my-5">
                                    <img height="300px" src="https://templates.envytheme.com/medip/default/assets/images/page-banner/banner-2.png" alt="" />
                                </div>
                        </div>
                        </Container>
            </div>
                        <div className="text-center py-3">
                            <div className="py-3">
                                <img className="py-3" src="https://templates.envytheme.com/medip/default/assets/images/error.png" alt="" />
                            </div>
                            <div className="py-3">
                                <h3>Error 404 : Page Not Found</h3>
                                <p>The page you are looking for might have been removed had its name<br/> changed or is temporarily unavailable.</p>
                            </div>
                            <Link to="/home"><Button className="mb-5" variant="outline-info">Home</Button></Link>
                        </div>  
        </div>
    );
};

export default NotFound;