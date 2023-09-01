import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddCourseDetail() {
    let [courseOption, setcourseOption] = useState([]);
    const [selected, setSelected] = useState(courseOption[0]);
    let [CourseDetail, setCourseDetail] = useState("");
    let [CourseDuration, setCourseDuration] = useState("");
    let [modal, setModal] = useState(false);

    const handleClose = () => setModal(false);

    const FormData = (e) => {
        setCourseDetail(e.target.value);
    }
    const FormDataDuration = (e) => {
        setCourseDuration(e.target.value);
    }
    const handleCourseId = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:5000/course/View_All_Course`, {
            headers: { "Authorization": `${token}` }
        })
            .then(function (response) {
                console.log(response.data.data)
                setcourseOption(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        var token = localStorage.getItem('token');

        axios.post('http://localhost:5000/course/coursecontent', {
            courscontent: CourseDetail,
            course_id: selected,
            course_duration: CourseDuration
        }, {
            headers: { "Authorization": `${token}` }
        })
            .then(function (response) {
                console.log(response.data.status);
                setCourseDetail([]);
                setCourseDuration([]);
                setSelected(courseOption[0]);
                if (response.data.status == "course content updated") {
                    setModal(true);
                } else {
                    setModal(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
                                        <h3 className='m-0'>Course Detail Form</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <Breadcrumb className='bread float-sm-right'>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>CourseContent</Breadcrumb.Item>
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
                                <div className="h4 bg-secondary p-3 rounded-top-3 text-white">Add Course Detail</div>
                                <div className="form px-3">
                                    <div className="user-box">
                                        <label className='fw-bold mb-2 mt-3'>Select Course</label><br />
                                        <select value={selected} onChange={handleCourseId} className='mb-3 w-50 rounded'>
                                            <option value="option" id="option" className='text-center'>--- Select Course ---</option>
                                            {
                                                courseOption.map((course, i) => {
                                                    return (
                                                        <>
                                                            <option value={course._id} id={course._id}>{course.coursename}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="user-box">
                                        <label className='fw-bold mb-2 mt-3'>Course Detail</label><br />

                                        <textarea placeholder="Enter Course Detail"
                                            value={CourseDetail}
                                            onChange={FormData}
                                            className='w-100 p-2 mb-3 rounded border border-1 border-secondary' cols="30" rows="5"></textarea>
                                    </div>
                                    <div className="user-box">
                                        <label className='fw-bold mb-2 mt-3'>Course Duration</label><br />
                                        <input
                                            type="text"
                                            placeholder="Enter Course Duration"
                                            value={CourseDuration}
                                            onChange={FormDataDuration}
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

export default AddCourseDetail;
