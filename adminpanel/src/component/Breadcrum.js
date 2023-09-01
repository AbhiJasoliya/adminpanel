import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function Breadcrum() {
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
            </div>

        </div>
    )
}

export default Breadcrum;
