import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div classNameName="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">Please login</h3>
                                    <p className="text-muted mb-4">Enter your personal details and start journey with us</p>
                                    <form>
                                        <div className="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-check">
                                            <input id="customCheck1" type="checkbox" className="form-check-input" />
                                            <label for="customCheck1" className="form-check-label">Remember password</label>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <Button type="submit" variant="outline-primary" className=" btn-block text-capitalize mb-2 rounded-pill shadow-sm">Sign in</Button>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <Button type="submit" variant="primary" className="btn-block text-capitalize mb-2 rounded-pill shadow-sm">Google Sign in</Button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Login;