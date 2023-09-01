import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineBell, AiOutlineCompress } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import Home from './Home';



function Nav1() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><Home /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#BiSearch"><BiSearch /></Nav.Link>
                        <Nav.Link href="#LuMessagesSquare"><LuMessagesSquare /></Nav.Link>
                        <Nav.Link href="#AiOutlineBell"><AiOutlineBell /></Nav.Link>
                        <Nav.Link href="#AiOutlineCompress"><AiOutlineCompress /></Nav.Link>
                        <Nav.Link href="#BsFillGridFill"><BsFillGridFill /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav1;