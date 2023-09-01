import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Breadcrumb, Card, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SinglePage() {

    let { id } = useParams();
    let [courseName, setcourseName] = useState("");
    let [courseDetail, setcourseDetail] = useState([]);
    let [courseDuration, setcourseDuration] = useState([]);

    useEffect(() => {
        var token = localStorage.getItem('token');
        Promise.all([
            axios.get(`http://localhost:5000/course/Get_Single_Course/${id}`, {
                headers: { "Authorization": `${token}` }
            }),
            axios.get(`http://localhost:5000/course/update_course/${id}`, {
                headers: { "Authorization": `${token}` }
            })
        ])
        .then(function (response) {
            console.log(response[1].data.data);
            setcourseName(response[0].data.data.coursename);
            setcourseDetail([response[1].data.data]); 
            setcourseDuration([response[1].data.data]); 
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);

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
                                        <h3 className='m-0'>Course Detail</h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <Breadcrumb className='bread float-sm-right'>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Course Detail</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='spacer'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='ps-2 pe-2'>
                                    <Card>
                                        <Card.Header className='fs-2 fw-bold'>{courseName}</Card.Header>
                                        <Card.Body>
                                            <Table responsive="md" border={1}>
                                                <tbody>
                                                    {
                                                        courseDetail.map((name, i) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>Course Detail</td>
                                                                        <td>{name.courscontent}</td>
                                                                    </tr>    
                                                                    <tr>
                                                                        <td>Course Duration</td>
                                                                        <td>{name.course_duration}</td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        courseDuration.map((name, i) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{name.course_duration}</td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    <td className='button'>
                                                        <Link to={`/coursecontent`} className='btn btn-primary' >
                                                            Add Detail</Link>
                                                    </td>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default SinglePage;

