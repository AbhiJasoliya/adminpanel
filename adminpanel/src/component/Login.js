import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const patt3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const patt4 = /^\w{6,8}$/;

    const Navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            setEmailError('Enter Your Email');
            return false;
        }
        else if (patt3.test(email) === false) {
            setEmailError('Enter Valid Email');
            return false;
        }

        else if (password === '') {
            setPasswordError('Enter Your Password');
            return false;
        }
        else if (patt4.test(password) === false) {
            setPasswordError('Enter 6-8 characters of [a-zA-Z0-9]');
            return false;
        }
        else {
            axios.post('http://localhost:5000/Login', {
                email: email,
                password: password
            })
                .then(function (response) {
                    // handle success
                    console.log(response);
                    if (response.data.status == "Success") {
                        Navigate('/home')
                    }
                    else {
                        alert(response.data.status)
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const show = () => {
        if (showPassword) {
            return <i className="text-secondary"><FaEyeSlash /></i>;
        } else {
            return <i className="text-secondary"><FaEye /></i>;;
        }
    };

    return (
        <div>
            <div className="spacer login-form">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={handleEmailChange}
                                size="30px" />
                            <label>Email</label>
                            <span className="error">{emailError}</span>
                            <br />
                            <br />
                        </div>
                        <div className="user-box">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={handlePasswordChange}
                                size="30px" />
                            <i className="eye" onClick={togglePasswordVisibility}>{show()}</i>
                            <label>Password</label>
                            <span className="error">{passwordError}</span>
                            <br />
                            <br />
                        </div>
                        {/* <Link to="/home"> */}
                        <input type="submit" className="bt" value="Submit" />
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
