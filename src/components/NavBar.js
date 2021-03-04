import React,{useState} from 'react';

import {Navbar, //Import some tags from bootstrap
        Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

const NavBar = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Login</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#project">Project Details</Nav.Link>
                            <Nav.Link href="#customer">Customer Details</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;