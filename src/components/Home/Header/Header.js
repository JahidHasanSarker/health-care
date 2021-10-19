import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import Img from '../../../logo.png'
import { Navbar, NavbarBrand } from 'react-bootstrap';



import './Header.css'
const Header = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (

       <Navbar fixed="top" className="bg-white">
            <div className="container">
                <NavbarBrand className="me-auto" href="#home"><img src={Img} alt=""/></NavbarBrand>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="d-flex">
                            
                            
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup  ms-auto">
                            <div className="navbar-nav">

                                <Link to="/home" className="nav-link">Home</Link>
                                <Link to="/service" className="nav-link">About</Link>
                                <Link to="/home" className="nav-link">Services</Link>
                                <Link to="/home" className="nav-link">Contact</Link>
                            
                                { user.email?
                                    <Link to="/login">
                                    <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                    </Link>
                                    :
                                    <Link to="/login">
                                    <button className="btn btn-warning me-2" >Log In</button>
                                    </Link>

                                }
                                {user.email && <span className="text-black d-flex align-items-center" >{user.displayName}</span>}
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
       </Navbar>
        
    );
};
export default Header;