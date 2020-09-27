import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Profile from "../assets/img/profile/Profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import "./AboutStyle.css";

const About = () => {
    return (

        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! <strong>&nbsp;I m Arpit Jindal</strong>
                                <br />
                                I m currently pursuing MCA from Vellore Institute Of Technology.
                                <br />
                                In the year 2019, I have completed my Bachelor Of Computer Application from Birla Institute Of Technology,Mesra,Lalpur Campus,Ranchi.
                                <br />


                                I m a strong enthusiast who want to be a successful professional in the field of Software Development where I can use my technical skills as well as
                                my interpersonal skills by working in a challenging environment.
                                In the year 2016,I was awared with the title of "Most Improved Student" in class 12th.
                                <br />



                                I have a strong passion for learning new technologies and use them in a innovative way which can mark my interest in that particular domain.
                                <br /><br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's Talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1oDSxAuTm-4Yp0ASpaSYTQKxh4AYTRIFO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/arpitdhn1998" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/arpit-jindal-1b52831a3/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                        </Button>
                                        </a>
                                    </div>













                                </Col>
                            </Row>
                        </Col>
                    </Row>






                </Container>
            </div>
        </div >

    )

}

export default About;