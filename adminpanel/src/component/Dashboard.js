import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Breadcrumb } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaChartPie, FaUserPlus } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";


function Dashboard() {
    return (
        <div>
            
            <div className="main-section">
                <section className='section-contant'>
                    <div className='contant-header'>
                        <div className='container-fluid'>
                            <div className='mb-2 pt-3 pb-3'>
                                <div className='row d-flex'>
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
    )
}

export default Dashboard;


