import React from 'react'
import { Navbar, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { BsPersonFillAdd } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";



function Dashboard() {
    return (
        <Container>
            <Navbar className="bg-body-tertiary">
                <>
                    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">Home</a> / Dashboard v1
                        </Navbar.Text>
                    </Navbar.Collapse>
                </>
            </Navbar>
            <Row >
                <Col className='col-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='neworder'>
                            <Row>
                                <Col className='col-6'>
                                    <Card.Title><h2><b>150</b></h2></Card.Title>
                                </Col>
                                <Col className='col-6 me-10px'>
                                    <h1><HiOutlineShoppingBag /></h1>
                                </Col>
                            </Row>
                            {/* <Row>

                        </Col>
                        <Col className='col-6'>
                        
                        </Col>
                    </Row> */}
                            <Card.Text>
                                New Orders
                            </Card.Text>
                            <Button variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='bouncerate'>
                            <Row>
                                <Col className='col-6'>
                                    <Card.Title><h2><b>53%</b></h2></Card.Title>
                                </Col>
                                <Col className='col-6 me-10px'>
                                    <h1><VscGraph /></h1>
                                </Col>
                            </Row>
                            {/* <Row>
                        <Col className='col-6'>

                        </Col>
                        <Col className='col-6'>
                        
                        </Col>
                    </Row> */}
                            <Card.Text>
                                Bounce Rate
                            </Card.Text>
                            <Button variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='col-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='userregistrations'>
                            <Row>
                                <Col className='col-6'>
                                    <Card.Title><h2><b>44</b></h2></Card.Title>
                                </Col>
                                <Col className='col-6 me-10px'>
                                    <h1><BsPersonFillAdd /></h1>
                                </Col>
                            </Row>
                            {/* <Row>
                        <Col className='col-6'>

                        </Col>
                        <Col className='col-6'>
                        
                        </Col>
                    </Row> */}
                            <Card.Text>
                                User Registrations
                            </Card.Text>
                            <Button variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='uniquevisitors'>
                            <Row>
                                <Col className='col-6 '>
                                    <Card.Title><h2><b>65</b></h2></Card.Title>
                                </Col>
                                <Col className='col-6 me-10px'>
                                    <h1><AiFillPieChart /></h1>
                                </Col>
                            </Row>
                            {/* <Row>
                        <Col className='col-6'>

                        </Col>
                        <Col className='col-6'>
                        
                        </Col>
                    </Row> */}
                            <Card.Text>
                                Unique Visitors
                            </Card.Text>
                            <Button variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
