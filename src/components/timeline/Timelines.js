

import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import whatsapp from "../../assets/img/projects/Whatsapp.JPG";
import portfolio from "../../assets/img/projects/3D-Portfolio.JPG";
import Business from "../../assets/img/projects/Bus2.JPG";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";

import Image from "react-bootstrap/Image";
import express from "../../assets/img/skills/express.svg"
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import MONGO from "../../assets/img/skills/mongodb.svg";
import node from "../../assets/img/skills/nodejs.svg"

import L_GIT from "../../assets/img/skills/github-api.svg";

import "./Timelinestyle.css";

const TimeLine = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Get GitHub Info */}
                    <ImageEvent date="01/09/2020" className="text-center" text="Whatsapp Clone Website" src={whatsapp} alt="NetFlix">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> It's a MERN stack real time application which uses the REST API to handle the request and response. It is a view of the full stack web application which shows the hybrid web application using Reacts, NodeJS, Express’s, MongoDB.

                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li> It's a real time application</li>
                                                    <li>It's gives the feel of the real whatsappp application.</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={MONGO} alt="Mongo DB" rounded className="image-style1 m-1"></Image> Mongo DB
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={express} alt="Express JS" rounded className="image-style1 m-1"></Image> Express JS
                            </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={node} alt="express" rounded className="image-style1 m-1"></Image> Node Js
                            </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_GIT} alt="Github API" rounded className="image-style1 m-1"></Image> GitHub API
                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton href="https://github.com/arpitdhn1998/WhatsApp-Clone-Mern" target="_blank">
                                    SOURCE CODE
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    <ImageEvent date="1/08/2020" className="text-center" text="3-D Portfolio" src={portfolio} alt="3-D Portfolio">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A Digital Portfolio which is the collection of electronic evidences about me, that have been assembled and being managed by me.
                                                It comes with 3D animation which enhances the beauty of the applications and gives a value to the application.
                                                <hr />

                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">

                                                    <li>Home Page</li>
                                                    <li>About Page</li>
                                                    <li>Contact Page</li>
                                                    <li>Skills Page</li>
                                                    <li>Projects Page</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_GIT} alt="Github API" rounded className="image-style1 m-1"></Image> GitHub API
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                                                    </li>


                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                                                    </li>




                                                </ul>
                                                <hr />

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="https://arpitdhn1998.github.io/Portfolio/" target="_blank">
                                    SEE LIVE
                </UrlButton>
                                <UrlButton href="https://github.com/arpitdhn1998/Portfolio" target="_blank">
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>


                    <ImageEvent date="1/08/2020" className="text-center" text="BusinessTact" src={Business} alt="BusinessTact">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> It is a dynamic Web Application which have been made by the use of Reactjs in which user can access and see the complete the different types of services being rendered.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Home Page</li>
                                                    <li>About Page</li>
                                                    <li>Contact Page</li>
                                                    <li>Type of Services being Provided </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_GIT} alt="Github API" rounded className="image-style1 m-1"></Image> GitHub API
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                                                    </li>


                                                </ul>
                                                <hr />

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton href="https://arpitdhn1998.github.io/Business_Tech/" target="_blank">
                                    SEE LIVE
                </UrlButton>
                                <UrlButton href="https://github.com/arpitdhn1998/Business_Tech" target="_blank">
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    );
};

export default TimeLine;