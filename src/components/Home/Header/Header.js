import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {  Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import Img from '../../../logo.png'




import './Header.css'
const Header = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (

        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink exact="true" to="/">
                        <img width="130px" src={Img} alt=""/>
                              </NavLink>
                        </Nav.Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink as={HashLink} className="custom" to="/home#about">
                                  About us
                        </NavLink>
            
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/services">
                                  Our Doctors
                        </NavLink>
            
                        </Nav.Link>
                        <Nav.Link as={HashLink} className="custom" activeClassName="activeStyle" to="/home#contact">
                                    Contact Us
                        </Nav.Link>

                        {user.email && 
                        <Nav.Link>
                            <div>
                            <Row className="d-flex align-items-center">
                            <Col sm={2}>
                                <Image className="header-pic-size" src={user?.photoURL} roundedCircle />
                            </Col>
                            <Col sm={9} className="header-pic ms-3" style={{ color: 'green', fontWeight: 'bold' }}> {user?.displayName}
                            </Col>
                            </Row>
                            </div>
                        </Nav.Link> }
                        {
                            user.email ?
                        <Nav.Link>
                        <NavLink className="custom-logout d-flex align-items-center" activeClassName="activeStyle" to="/login" onClick={logOut}>log out <i className="fas fa-sign-out-alt ms-2"></i>
                        </NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link>
                        <NavLink className="custom d-flex align-items-center " activeClassName="activeStyle" to="/login">
                        <i class="fas fa-user-plus me-2"></i> Register 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        );
    };
    export default Header;
    
