import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { FaArrowAltCircleRight, FaBars, FaCalendarAlt, FaChartPie, FaColumns, FaCopy, FaEdit, FaRegEnvelope, FaExpandArrowsAlt, FaImage, FaRegBell, FaRegCircle, FaRegComments, FaSearch, FaTable, FaTachometerAlt, FaTh, FaThLarge, FaTree, FaUserPlus, FaBook, FaPlusSquare, FaEllipsisH, FaFile, FaCircle, FaRegDotCircle } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconName, ImStatsBars } from "react-icons/im";
import { Breadcrumb, Dropdown } from 'react-bootstrap';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const Headers = () => {

    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleSidebar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <div className='wrapper layout-fixed'>
                <div className='navigation'>
                    <header>
                        <nav>
                            <div className={`top-header d-flex justify-content-between p-2 align-items-center ${isNavOpen ? '' : 'ms-0'}`}>
                                <ul className='navbar'>
                                    <li className='nav-item'>
                                        <button className='btn nav-link toggle-button' onClick={toggleSidebar}>
                                            <FaBars />
                                        </button>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Home
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <ul className='navbar-icon d-flex'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            <FaSearch />
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaRegComments /> </a>
                                        <span className='badge comment'>3</span>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaRegBell /> </a>
                                        <span className='badge bell'>15</span>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaExpandArrowsAlt /> </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaThLarge /> </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>

                {isNavOpen && (

                    <div className='sidebar elevation-4' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
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

                            <div className='dashboard'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaTachometerAlt /></i>Dashboard</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Dashboard v1</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Dashboard v2</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Dashboard v3</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='widgets'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaTh /></i> <span className='ms-2'>Widgets</span>
                                    </a>
                                </div>
                            </div>

                            <div className='layout'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaCopy /></i>Layout Options</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Top Navigation</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Top Navigation + Sidebar</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Boxed</span>} />
                                        <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Fixed Sidebar</span>} />
                                        <TreeItem className='drowp-item' nodeId="6" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Fixed Sidebar + Custom Area</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='charts'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaChartPie /></i>Charts</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>ChartJs</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Flot</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Inline</span>} />
                                        <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>uPlot</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='ui-elements'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaTree /></i>UI Elements</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>General</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Icons</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Buttons</span>} />
                                        <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Sliders</span>} />
                                        <TreeItem className='drowp-item' nodeId="6" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Modals & Alerts</span>} />
                                        <TreeItem className='drowp-item' nodeId="7" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Navbar & Tabs</span>} />
                                        <TreeItem className='drowp-item' nodeId="8" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Timeline</span>} />
                                        <TreeItem className='drowp-item' nodeId="9" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Ribbons</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='forms'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaEdit /></i>Forms</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>General Elements</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Advanced Elements</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Editors</span>} />
                                        <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Validation</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='tables'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaTable /></i>Tables</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Simple Tables</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Data Tables</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>jsGrid</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='nav-header'> EXAMPLES </div>

                            <div className='calendar'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaCalendarAlt /></i> <span className='ms-2'>Calendar</span>
                                    </a>
                                </div>
                            </div>

                            <div className='gallery'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaImage /></i> <span className='ms-2'>Gallery</span>
                                    </a>
                                </div>
                            </div>

                            <div className='kanban-board'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaColumns /></i> <span className='ms-2'>Kanban Board</span>
                                    </a>
                                </div>
                            </div>

                            <div className='mailbox'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaRegEnvelope /></i>Mailbox</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Inbox</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Compose</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Read</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='pages'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaBook /></i>Pages</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Invoice</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Profile</span>} />
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>E-commerce</span>} />
                                        <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Projects</span>} />
                                        <TreeItem className='drowp-item' nodeId="6" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Project Add</span>} />
                                        <TreeItem className='drowp-item' nodeId="7" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Project Edit</span>} />
                                        <TreeItem className='drowp-item' nodeId="8" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Project Detail</span>} />
                                        <TreeItem className='drowp-item' nodeId="9" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Conatcts</span>} />
                                        <TreeItem className='drowp-item' nodeId="10" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>FAQ</span>} />
                                        <TreeItem className='drowp-item' nodeId="11" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Conatcts Us</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='extras'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaPlusSquare /></i>Extras</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-5'><FaRegCircle /></i>Login & Register v1</span>}>
                                            <TreeItem className='drowp-item' nodeId="12" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Login v1</span>} />
                                            <TreeItem className='drowp-item' nodeId="13" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Register v1</span>} />
                                            <TreeItem className='drowp-item' nodeId="14" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Forgot Password v1</span>} />
                                            <TreeItem className='drowp-item' nodeId="15" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Recover Password v1</span>} />
                                        </TreeItem>
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-5'><FaRegCircle /></i>Login & Register v2</span>}>
                                            <TreeItem className='drowp-item' nodeId="16" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Login v2</span>} />
                                            <TreeItem className='drowp-item' nodeId="17" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Register v2</span>} />
                                            <TreeItem className='drowp-item' nodeId="18" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Forgot Password v2</span>} />
                                            <TreeItem className='drowp-item' nodeId="19" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Recover Password v2</span>} />
                                        </TreeItem>
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Lockscreen</span>} />
                                        <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Legacy User Menu</span>} />
                                        <TreeItem className='drowp-item' nodeId="6" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Language Menu</span>} />
                                        <TreeItem className='drowp-item' nodeId="7" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Error 404</span>} />
                                        <TreeItem className='drowp-item' nodeId="8" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Error 500</span>} />
                                        <TreeItem className='drowp-item' nodeId="9" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Pace</span>} />
                                        <TreeItem className='drowp-item' nodeId="10" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Blank Page</span>} />
                                        <TreeItem className='drowp-item' nodeId="11" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Starter Page</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='searchs'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaSearch /></i>Search</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Simple Search</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Enhanced</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='nav-header'> MISCELLANEOUS </div>

                            <div className='tabbed-iframe-plugin'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaEllipsisH /></i> <span className='ms-2'>Tabbed IFrame Plugin</span>
                                    </a>
                                </div>
                            </div>

                            <div className='documentation'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaFile /></i> <span className='ms-2'>Documentation</span>
                                    </a>
                                </div>
                            </div>

                            <div className='nav-header'> MULTI LEVEL EXAMPLE </div>

                            <div className='level-1'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaCircle /></i> <span className='ms-2'>Level 1</span>
                                    </a>
                                </div>
                            </div>

                            <div className='level-1'>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    sx={{ height: 'auto', flexGrow: 1, maxWidth: 250, overflow: 'hidden' }} >
                                    <TreeItem className='side-drowp' nodeId="1" label={<span><i className='me-2 fs-5'><FaCircle /></i> Level 1</span>}>
                                        <TreeItem className='drowp-item' nodeId="2" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Level 2</span>} />
                                        <TreeItem className='drowp-item' nodeId="3" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Level 2</span>}>
                                            <TreeItem className='drowp-item' nodeId="5" label={<span><i className='me-2 fs-6'><FaRegDotCircle /></i>Level 3</span>} />
                                            <TreeItem className='drowp-item' nodeId="6" label={<span><i className='me-2 fs-6'><FaRegDotCircle /></i>Level 3</span>} />
                                            <TreeItem className='drowp-item' nodeId="7" label={<span><i className='me-2 fs-6'><FaRegDotCircle /></i>Level 3</span>} />
                                        </TreeItem>
                                        <TreeItem className='drowp-item' nodeId="4" label={<span><i className='me-2 fs-6'><FaRegCircle /></i>Level 2</span>} />
                                    </TreeItem>
                                </TreeView>
                            </div>

                            <div className='level-1'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5'><FaCircle /></i> <span className='ms-2'>Level 1</span>
                                    </a>
                                </div>
                            </div>

                            <div className='nav-header'> LABELS </div>

                            <div className='important'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5 text-danger'><FaRegCircle /></i> <span className='ms-2'>Important</span>
                                    </a>
                                </div>
                            </div>

                            <div className='warning'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5 text-warning'><FaRegCircle /></i> <span className='ms-2'>Warning</span>
                                    </a>
                                </div>
                            </div>

                            <div className='informational'>
                                <div className="side-drowp ms-1">
                                    <a href="#" className="drowp-item">
                                        <i className='ms-1 fs-5 text-info'><FaRegCircle /></i> <span className='ms-2'>Informational</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>

            <div className={`main-section ${isNavOpen ? '' : 'ms-0'}`}>
                <section className='section-contant'>
                    <div className='contant-header'>
                        <div className='container-fluid'>
                            <div className='row mb-2 pt-3 pb-3'>
                                <div className='top-sec d-flex'>
                                    <div className='col-sm-6'>
                                        <h3 className='m-0'>Dashboard</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <Breadcrumb className='bread float-sm-right'>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Dashboard v1</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-contant'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-info'>
                                    <div className='inner'>
                                        <h3>150</h3>
                                        <p>New Orders</p>
                                    </div>
                                    <div className='icon'>
                                        <i><HiOutlineShoppingBag /></i>
                                    </div>
                                    <a href='#' className='small-box-footer'>
                                        More info <i><FaArrowAltCircleRight /></i>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-success'>
                                    <div className='inner'>
                                        <h3>53%</h3>
                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className='icon'>
                                        <i><ImStatsBars /></i>
                                    </div>
                                    <a href='#' className='small-box-footer'>
                                        More info <i><FaArrowAltCircleRight /></i>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-warning'>
                                    <div className='inner'>
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className='icon'>
                                        <i><FaUserPlus /></i>
                                    </div>
                                    <a href='#' className='small-box-footer'>
                                        More info <i><FaArrowAltCircleRight /></i>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-danger'>
                                    <div className='inner'>
                                        <h3>65</h3>
                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className='icon'>
                                        <i><FaChartPie /></i>
                                    </div>
                                    <a href='#' className='small-box-footer'>
                                        More info <i><FaArrowAltCircleRight /></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Headers;
