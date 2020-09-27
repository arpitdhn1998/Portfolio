import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:arpitdhn98@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="arpitdhn98@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                 </Button>
                            </a>

                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/arpit-jindal-1b52831a3/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/arpit.jindal.58/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Say hello on FB">
                                    <i className="fab fa-facebook-square"></i> FaceBook
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/arpitdhn1998/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://twitter.com/ArpitJindal8" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="Tweets are welcomed!">
                                    <i className="fab fa-twitter"></i> Twitter
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>


    )
}

export default Contact;