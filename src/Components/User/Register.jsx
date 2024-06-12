import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const baseUrl = 'http://localhost:5000/api/students/signup';

    const [studentData, setStudentData] = useState({
        fullname: '',
        email: '',
        password: '',
        username: '',
        interseted_categories: '',
        status: ''
    });

    useEffect(() => {
        document.title = 'LMS | Student Register';
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (event) => {
        setStudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = async () => {
        const studentFormData = {
            fullname: studentData.fullname,
            email: studentData.email,
            password: studentData.password,
            username: studentData.username,
            interseted_categories: studentData.interseted_categories
        };

        try {
            const response = await axios.post(baseUrl, studentFormData);
            setStudentData({
                fullname: '',
                email: '',
                password: '',
                username: '',
                interseted_categories: '',
                status: 'success'
            });
            console.log(response);
            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    title: 'Register Successfully!',
                    icon: 'success',
                    toast: true,
                    timer: 2000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            }
            setTimeout(() => {
                window.location.href = '/user-login';
            }, 2500);
        } catch (error) {
            console.error('Error during API call', error);
            setStudentData({ status: 'error' });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <div className="text-center wow fadeInUp">
                                <h5 className="card-title text-center mb-3 fw-light fs-5 text-dark">Регистрация</h5>
                            </div>
                            {studentData.status === 'success' && <h3 className='text-center text-success mb-3'>Регистрация прошла успешно</h3>}
                            {studentData.status === 'error' && <h3 className='text-center text-danger mb-3'>Не все поля заполнены</h3>}
                            <div className="form-floating mb-3">
                                <input type="text" onChange={handleChange} name='fullname' className="form-control" id="floatingInput" placeholder="fullname" />
                                <label htmlFor="floatingInput">Полное имя</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" onChange={handleChange} name='email' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">E-mail</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" onChange={handleChange} name='username' className="form-control" id="floatingInput" placeholder="username" />
                                <label htmlFor="floatingInput">Никнейм</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='password' type="password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Пароль</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea onChange={handleChange} name='interseted_categories' className="form-control" id="floatingInput" placeholder="Interest"></textarea>
                                <label htmlFor="floatingInput">Хобби</label>
                                <div id="emailHelp" className="form-text">Eg: Python, Java, C, C++, Web Development etc...</div>
                            </div>
                            <div className="d-grid my-4">
                                <Link to="/user-login" className="btn btn-primary rounded-pill btn-login text-uppercase fw-bold" type="submit">Регистрация</Link>
                                <hr className='' />
                                <Link to='/teacher-login' className="btn btn-telecom rounded-pill btn-login text-uppercase fw-bold">Уже есть аккаунт?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
