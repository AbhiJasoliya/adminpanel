import React, { useState } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineMenu, AiOutlineBell, AiOutlineCompress } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { Container, Nav, Navbar, Row, Col, Dropdown, Button, Offcanvas } from "react-bootstrap";
import { GrUserAdmin, GrGallery } from "react-icons/gr";
import { AiOutlineSearch, AiOutlineCalendar, AiOutlineDashboard, AiOutlineLayout, AiOutlineMail, } from "react-icons/ai";
import { MdWidgets } from "react-icons/md";
import { BsFillBarChartLineFill, BsFillTreeFill, BsTable, BsFillGridFill, BsKanban, BsCircle, } from "react-icons/bs";
import { GiExtraTime } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home">
                        <Button variant="primary" onClick={handleShow}>
                            <AiOutlineMenu />
                        </Button>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    {" "}
                                    <h3>
                                        <GrUserAdmin /> AdminLTE 3
                                    </h3>
                                    <h5>Alexander Pierce</h5>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <input type="search" className="font1" placeholder="Search"></input>{" "}
                                <span className="font">
                                    <AiOutlineSearch />
                                </span>

                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="dashboard"> <AiOutlineDashboard /> </span> <span>  Dashboard </span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item">Dashboard v1</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item">Dashboard v2</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item">Dashboard v3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <button className="mt-2 widgets"> <span className="layout"> <MdWidgets /> </span> WIDGETS  </button>

                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="layout"> <AiOutlineLayout /> </span> <span>  Layout Opction </span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">Top Navigation</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Top Navigation + Slider</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Boved</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Fixed Sidebar</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Fixed Sidebar + Custom</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Fixed Navbar</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Fixed Footer</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Collapsed Sidebar </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="chart"> <BsFillBarChartLineFill /> </span> <span> Charts </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">Chart Js</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Flot</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Inline</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">uPlot</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>


                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="tree"> <BsFillTreeFill /> </span>  <span> UI Elements </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">General</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Icon</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Button</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Slider</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Modals & Alerts new</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Modals & Tabs</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Timeline</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Ribbons</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>


                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="forms"> <FaWpforms /> </span> <span> Forms </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">General Elements</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Advance Elements</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Editors</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Validaction</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="table"> <BsTable /> </span> <span> Tables </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">Simple Table</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">Data Table</Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">jsGrid</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <h5 className="text-center">EXAMPLES</h5>

                                <Row>
                                    <Col className="col-12">
                                        <button>
                                            {" "}
                                            <span className="can">
                                                {" "}
                                                <AiOutlineCalendar />{" "}
                                            </span>{" "}
                                            Canlender{" "}
                                        </button>
                                    </Col>
                                    <Col className="col-12 mt-2">
                                        <button>
                                            {" "}
                                            <span className="gallery">
                                                {" "}
                                                <GrGallery />{" "}
                                            </span>{" "}
                                            <span>Gallery</span>{" "}
                                        </button>
                                    </Col>
                                    <Col className="col-12 mt-2 me-2">
                                        <button>
                                            {" "}
                                            <span className="gallery">
                                                {" "}
                                                <BsKanban />{" "}
                                            </span>{" "}
                                            <span>kanban Board</span>{" "}
                                        </button>
                                    </Col>
                                </Row>
                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="table">
                                            {" "}
                                            <AiOutlineMail />{" "}
                                        </span>{" "}
                                        <span> Mail Box </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">
                                            Inbox
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Compose
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Read
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="table">
                                            {" "}
                                            <RiPagesFill />{" "}
                                        </span>{" "}
                                        <span> Pages </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">
                                            Invoice
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            E-commerce
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Projects
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Contacts
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Project Deatils
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Project Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Contact Us
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Project Add
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            FAQ
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="table">
                                            <GiExtraTime />
                                        </span>
                                        <span> Extras </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                                    <span>Login & Register V1</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Login 1</Dropdown.Item>
                                                    <Dropdown.Item href="#">Register 1 </Dropdown.Item>
                                                    <Dropdown.Item href="#  ">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                                    <span>Login & Register V2</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Login 2</Dropdown.Item>
                                                    <Dropdown.Item href="#">Register 2 </Dropdown.Item>
                                                    <Dropdown.Item href="#  ">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">Louckscreen </Dropdown.Item>
                                        <Dropdown.Item href="#">Legacy User Menu</Dropdown.Item>
                                        <Dropdown.Item href="#">Error 404</Dropdown.Item>
                                        <Dropdown.Item href="#">Error 500</Dropdown.Item>
                                        <Dropdown.Item href="#">Pacev</Dropdown.Item>
                                        <Dropdown.Item href="#">Starter Page</Dropdown.Item>
                                        <Dropdown.Item href="#">Blank Page</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        <span className="table">
                                            {" "}
                                            <AiOutlineSearch />{" "}
                                        </span>{" "}
                                        <span> Search </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" className="item1">
                                            Simple search
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className="item1">
                                            Enhanced
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <h5 className="text-center">MISCELLANEOUS</h5>
                                <Row>
                                    <Col className="col-12">
                                        <button>
                                            {" "}
                                            <span className="can">
                                                {" "}
                                                <AiOutlineCalendar />{" "}
                                            </span>{" "}
                                            Tabbed Ifram Piugine{" "}
                                        </button>
                                    </Col>
                                    <Col className="col-12 mt-2">
                                        <button>
                                            {" "}
                                            <span className="gallery">
                                                {" "}
                                                <GrGallery />{" "}
                                            </span>{" "}
                                            <span>Documentaion</span>{" "}
                                        </button>
                                    </Col>
                                </Row>
                                <h5 className="text-center">MULTI LEVEL EXAMPLE</h5>
                                <Row>
                                    <Col className="col-12">
                                        <button>
                                            {" "}
                                            <span className="can">
                                                {" "}
                                                <AiOutlineCalendar />{" "}
                                            </span>{" "}
                                            Level 1{" "}
                                        </button>
                                    </Col>
                                    <Col className="col-12 mt-2">
                                        <button>
                                            {" "}
                                            <span className="gallery">
                                                {" "}
                                                <GrGallery />{" "}
                                            </span>{" "}
                                            <span>Level 1</span>{" "}
                                        </button>
                                        <Col className="col-12 mt-2">
                                            <Dropdown>
                                                {" "}
                                                Level 1
                                                <Dropdown.Toggle
                                                    variant=""
                                                    id="dropdown-basic"
                                                ></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Level 2</Dropdown.Item>
                                                    <Dropdown.Item href="#">Level 2 </Dropdown.Item>
                                                    <Dropdown.Item href="#">Level 2 </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Col>
                                </Row>

                                <h5 className="text-center">LABELS</h5>
                                <Row>
                                    <Col className="col-12 mt-2">
                                        <Button variant=""> <span className="ring1"><BsCircle /></span> <span>Important</span> </Button>
                                    </Col>
                                    <Col className="col-12 mt-2">
                                        <Button variant=""> <span className="ring2"><BsCircle /></span> <span>Warming</span> </Button>
                                    </Col>
                                    <Col className="col-12 mt-2">
                                        <Button variant=""> <span className="ring3"><BsCircle /></span> <span>Information</span> </Button>
                                    </Col>
                                </Row>

                            </Offcanvas.Body>
                       </Offcanvas>
                    </Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="me-0">
                        <Nav.Link href="#BiSearch"><BiSearch /></Nav.Link>
                        <Nav.Link href="#LuMessagesSquare"><LuMessagesSquare /></Nav.Link>
                        <Nav.Link href="#AiOutlineBell"><AiOutlineBell /></Nav.Link>
                        <Nav.Link href="#AiOutlineCompress"><AiOutlineCompress /></Nav.Link>
                        <Nav.Link href="#BsFillGridFill"><BsFillGridFill /></Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </>


    );
}



export default Home;