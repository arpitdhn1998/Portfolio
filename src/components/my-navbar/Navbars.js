import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Brand from "../../assets/img/Brand.jpg";

import Nav from 'react-bootstrap/Nav';
import "./NavBarStyle.css";
const Navbars = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="brand" src={Brand} alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Project</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>


        </>
    )
}


export default Navbars;