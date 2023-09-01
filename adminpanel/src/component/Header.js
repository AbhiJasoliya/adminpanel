import React, { useEffect, useState } from 'react';
import { FaBars, FaExpandArrowsAlt, FaRegBell, FaRegComments, FaSearch, FaThLarge } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { BiLogOut } from "react-icons/bi";
import Sidebar from './Sidebar';
import {Link, Navigate} from 'react-router-dom';

function Header() {

    console.log(localStorage.getItem("token"));
    
    const logouthandler =()=>{
        localStorage.clear();
        Navigate('/')
    }

    return (
        <div>

            <div className='wrapper layout-fixed'>
                <div className='navigation'>
                    <header>
                        <nav>
                            <div className='top-header d-flex justify-content-between p-2 align-items-center'>
                                <ul className='navbar'>
                                    <li className='nav-item'>
                                        <button className='btn nav-link toggle-button'>
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
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> 
                                        <Link to={"https://localhost:3000/"}>
                                        <BiLogOut onClick={logouthandler}/>
                                        </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>

            <Sidebar />

        </div>
    )
}



export default Header;


