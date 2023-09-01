import React from 'react';
import { FaCalendarAlt, FaChartPie, FaColumns, FaCopy, FaEdit, FaRegEnvelope, FaImage, FaRegCircle, FaSearch, FaTable, FaTachometerAlt, FaTh, FaTree, FaBook, FaPlusSquare, FaEllipsisH, FaFile, FaCircle, FaRegDotCircle, FaAngleDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import 'bootstrap/js/dist/collapse';


function Sidebar() {

    return (
        <div>
            <div className='wrapper layout-fixed'>
                <div className="sidebar" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    <a href='#' className='brand-link border-bottom'>
                        <img src={require('./image/AdminLTELogo.png')} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                        <span className="brand-text fw-light">AdminLTE 3</span>
                    </a>
                    <div className='sidebar-dark'>
                        <div className='user-panel mt-3 pb-3 mb-3 d-flex border-bottom'>
                            <div className='image d-inline-block ps-4'>
                                <img src={require('./image/user2-160x160.jpg')} className='img-circle elevation-2' alt='User Image' />
                            </div>
                            <div className='info'>
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>

                        <ul className="nav nav-pills flex-column" id='parentM'>

                            <li className="nav-item py-2">
                                <a href="#submenu" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaTachometerAlt /></i>Dashboard
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Dashboard v1
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Dashboard v2
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Dashboard v3
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white" data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaTh /></i>
                                    Widgets
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu1" className="nav-link text-white" data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaCopy /></i>
                                    Layout Options
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu1' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Top Navigation
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Top Navigation + Sidebar
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Boxed
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Fixed Sidebar
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Fixed Sidebar <small>+ Custom Area</small>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu2" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaChartPie /></i>
                                    Charts
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu2' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            ChartJS
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Flot
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Inline
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            uPlot
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu3" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaTree /></i>
                                    UI Elements
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu3' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            General
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Icons
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Buttons
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Sliders
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Modals & Alerts
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Navbar & Tabs
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Timeline
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Ribbons
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu4" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaEdit /></i>
                                    Forms
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu4' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            General Elements
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Advanced Elements
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Editors
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Validation
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu5" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaTable /></i>
                                    Tables
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu5' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Simple Tables
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Data Tables
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            jsGrid
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-header">EXAMPLES</li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaCalendarAlt /></i>
                                    Calendar
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaImage /></i>
                                    Gallery
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaColumns /></i>
                                    Kanban Board
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu6" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaRegEnvelope /></i>
                                    Mailbox
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu6' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Inbox
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Compose
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Read
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu7" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaBook /></i>
                                    Pages
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu7' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Invoice
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            E-commerce
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Projects
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Project Add
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Project Edit
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Project Detail
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Contact
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu8" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaPlusSquare /></i>
                                    Extras
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu8' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#petamenu" className="nav-link text-white" data-bs-toggle="collapse" aria-expanded="false">
                                            <i className='me-3 fs-5'><FaRegCircle /></i>
                                            Login & Register v1
                                            <i className='arrow-down'><FaAngleDown /></i>
                                        </a>
                                        <ul className="nav collapse ms-1 flex-column" id='petamenu'>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white" aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Login v1
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white" aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Register v1
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white" aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Forgot Password v1
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white" aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Recover Password v1
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item py-2">
                                        <a href="#petamenu1" className="nav-link text-white" data-bs-toggle="collapse" aria-expanded="false">
                                            <i className='me-3 fs-5'><FaRegCircle /></i>
                                            Login & Register v2
                                            <i className='arrow-down'><FaAngleDown /></i>
                                        </a>
                                        <ul className="nav collapse ms-1 flex-column" id='petamenu1'>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Login v2
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Register v2
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Forgot Password v2
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegCircle /></i>
                                                    Recover Password v2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Lockscreen
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Legacy User Menu
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Language Menu
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Error 404
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Error 500
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Pace
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Blank Page
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Starter Page
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu9" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaSearch /></i>
                                    Search
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu9' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Simple Search
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Enhanced
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-header">MISCELLANEOUS</li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaEllipsisH /></i>
                                    Tabbed IFrame Plugin
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaFile /></i>
                                    Documentation
                                </a>
                            </li>

                            <li className="nav-header">MULTI LEVEL EXAMPLE</li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaCircle /></i>
                                    Level 1
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#submenu10" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaCircle /></i>
                                    Level 1
                                    <i className='arrow-down'><FaAngleDown /></i>
                                </a>
                                <ul className="nav collapse ms-1 flex-column" id='submenu10' data-bs-parent="#parentM">
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white " aria-current="page">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Level 2
                                        </a>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#petamenu2" className="nav-link text-white" data-bs-toggle="collapse" aria-expanded="false">
                                            <i className='me-3 fs-5'><FaRegCircle /></i>
                                            Level 2
                                            <i className='arrow-down'><FaAngleDown /></i>
                                        </a>
                                        <ul className="nav collapse ms-1 flex-column" id='petamenu2'>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegDotCircle /></i>
                                                    Level 3
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegDotCircle /></i>
                                                    Level 3
                                                </a>
                                            </li>
                                            <li className="nav-item py-2">
                                                <a href="#" className="nav-link text-white " aria-current="page">
                                                    <i className='me-3'><FaRegDotCircle /></i>
                                                    Level 3
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item py-2">
                                        <a href="#" className="nav-link text-white ">
                                            <i className='me-3'><FaRegCircle /></i>
                                            Level 2
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='me-3 fs-5'><FaCircle /></i>
                                    Level 1
                                </a>
                            </li>

                            <li className="nav-header">LABELS</li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='text-danger me-3 fs-5'><FaRegCircle /></i>
                                    Important
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='text-warning me-3 fs-5'><FaRegCircle /></i>
                                    Warning
                                </a>
                            </li>

                            <li className="nav-item py-2">
                                <a href="#" className="nav-link text-white " data-bs-toggle="collapse" aria-current="page">
                                    <i className='text-info me-3 fs-5'><FaRegCircle /></i>
                                    Informational
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;


