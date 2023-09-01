import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb } from 'react-bootstrap';
import '../style.css';
import axios from 'axios';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCourse() {
    let [modal, setModal] = useState(false);
    let [course, setCourse] = useState("");

    const handleClose = () => setModal(false);

    const FormData = (e) => {
        setCourse(e.target.value);
    }

    const handleSubmit = (e) => {
        var token = localStorage.getItem('token');
        // console.log(course);
        e.preventDefault();
        axios.post('http://localhost:5000/course/AddCourse', {
            coursename: course
        },
            {
                headers: { "Authorization": `${token}` }
            })
            .then(function (response) {
                console.log(response.data);
                setCourse("");
                if(response.data.status === "Success"){
                    setModal(true);
                }else{
                    setModal(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <>
            <Header />
            <div className="main-section">
                <section className='section-contant'>
                    <div className='contant-header'>
                        <div className='container-fluid'>
                            <div className='mb-2 pt-3 pb-3'>
                                <div className='row d-flex'>
                                    <div className='col-sm-6'>
                                        <h3 className='m-0'>Course Form</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <Breadcrumb className='bread float-sm-right'>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Add Course</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-contant'>
                    <div className="container-fluid">
                        <div className="form-box">
                            <form onSubmit={handleSubmit}>
                                <div className="h4 bg-secondary p-3 rounded-top-3 text-white">Add Course Name</div>
                                <div className="form px-3">
                                    <div className="user-box">
                                        <label className='fw-bold mb-2 mt-3'>Course Name</label><br />
                                        <input
                                            type="text"
                                            placeholder="Enter Course Name"
                                            value={course}
                                            onChange={FormData}
                                            className='w-100 p-2 mb-3 rounded border border-1 border-secondary' />
                                    </div>
                                    <input type="submit" className="fs-5 text-white bg-secondary rounded py-1 px-5 mb-4 border-0" value="Add" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Modal show={modal} onHide={handleClose}>
                    <Modal.Body>COURSE SUCCESSFULLY ADD</Modal.Body>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                </Modal>
            </div>
        </>
    )
}

export default AddCourse;