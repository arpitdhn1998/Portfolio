import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Coursera from "../../assets/img/experience/Co.JPG";
import Tilt from "react-tilt";
import "./Experiencestyle.css";


const Experience = () => {
    return (

        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={Coursera} alt="Coursera logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">Web Development</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style ">Front End Developer</strong>
                                        <br />
                                        <strong>Role:</strong> Student
                                         <br />
                                        <strong>Description:</strong> <strong>Learning the fundamentals of the web development</strong> with full customizability option across web application. Debugging existing code to solve problems. Also worked on <strong>to solve complex</strong> problems by applying the modern web development tools and technologies.
                                         <br />
                                        <strong>Technology:</strong> HTML, CSS3 and JAVASCRIPT
                                         <br />
                                        <strong>Duration:</strong> July 2020 - Present
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>



    )
}
export default Experience;