import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import Img from '../../../logo.png';

const Header = () => {
    return (
    <>
        <Navbar bg="light" variant="light" fixed="top">
            <Container>
            <Navbar.Brand href="#home"><img src={Img} alt=""/></Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link className="header-link" href="#home">Home</Nav.Link>
                <Nav.Link className="header-link" href="#about">About</Nav.Link>
                <Nav.Link className="header-link" href="#service">Services</Nav.Link>
                <Nav.Link className="header-link" href="#pricing">Login</Nav.Link>
                <Nav.Link className="header-link" href="#pricing">LogOut</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;
