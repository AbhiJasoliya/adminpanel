import React from 'react';
import { Breadcrumb, Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function ViewCourse() {
    let [courseName, setcourseName] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:5000/course/ViewCourse`, {
            headers: { "Authorization": `${token}` }
        })
            .then(function (response) {
                setcourseName(response.data.data);
                localStorage.setItem('npage', response.data.totalpage);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const npage = localStorage.getItem('npage');

    const numbers = [];
    for (let number = 1; number <= npage; number++) {
        numbers.push(
            <>
                {number}
            </>
        );
    }

    const changePage = (n) => {
        localStorage.setItem("page", n.props.children);
        var page = localStorage.getItem("page");

        var token = localStorage.getItem('token');
        axios.get(`http://localhost:5000/course/ViewCourse/?page_no=${page}`, {
            headers: { "Authorization": `${token}` }
        })
            .then(function (response) {
                setcourseName(response.data.data);
                localStorage.setItem('npage', response.data.totalpage);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleDelete = (name, index) => {
        var id = name._id;
        var token = localStorage.getItem('token');

        Promise.all([
            axios.delete(`http://localhost:5000/course//Delete_Course/${id}`, {
                headers: { "Authorization": `${token}` }
            }),
            axios.get(`http://localhost:5000/course/ViewCourse/?page_no=${currentPage}`, {
                headers: { "Authorization": `${token}` }
            })
                .then(function (response) {
                    setcourseName(response.data.data);
                    localStorage.setItem('npage', response.data.totalpage);
                })
                .catch(function (error) {
                    console.log(error);
                })
        ])
    }

    return (
        <div>
            <Header />

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
                                        <Breadcrumb.Item active>View Course</Breadcrumb.Item>
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
                                    <Card.Header>View Course</Card.Header>
                                    <Card.Body>
                                        <Table responsive="md" border={1}>
                                            <thead>
                                                <tr>
                                                    <th width={200}>No</th>
                                                    <th>Course Name</th>
                                                    <th className='ms-auto' width={130}>Details</th>
                                                    <th className='ms-auto' width={40}>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    courseName.map((name, i) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>{i + 1}.</td>
                                                                    <td>{name.coursename}</td>
                                                                    <td align='center' className='button'>
                                                                        <Link to={`/Get_Single_Course/${name._id}`} className='btn btn-primary' >View Detail</Link>
                                                                    </td>
                                                                    <td align='center'>
                                                                        <a href="#" onClick={() => handleDelete(name, i)}><MdDelete className='fs-2 text-danger'></MdDelete></a>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        <nav>
                                            <ul className={`pagination page`}>
                                                {
                                                    numbers.map((n, i) => (
                                                        <li className={`page-item`}>
                                                            <a href="#" className='page-link' onClick={() => changePage(n)}>{n}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </nav>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ViewCourse;