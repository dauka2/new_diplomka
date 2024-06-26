import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import Swal from 'sweetalert2';
import teachers from '../../data/teachers.json'; // Путь к вашему JSON-файлу

const TeacherLogin = () => {
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  const [teacherLoginData, setTeacherLoginData] = useState({
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'LMS | Teacher Login';
  }, []);

  const handleChange = (event) => {
    setTeacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = () => {
    const { email, password } = teacherLoginData;

    const teacher = teachers.find((teacher) => teacher.email === email && teacher.password === password);

    if (teacher) {
      localStorage.setItem('teacherLoginStatus', true);
      localStorage.setItem('teacherId', teacher.id);
      window.location.href = '/teacher-dashboard';
    } else {
      setErrorMsg('Неправильный email или пароль');
    }
  };

  if (teacherLoginStatus === 'true') {
    window.location.href = '/teacher-dashboard';
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <div className="text-center wow fadeInUp">
                  <h5 className="card-title text-center mb-3 fw-light fs-5 text-dark">ЛОГИН УЧИТЕЛЯ</h5>
                </div>
                {errorMsg && <p className="text-danger">{errorMsg}</p>}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={teacherLoginData.email}
                    onChange={handleChange}
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">E-mail</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={teacherLoginData.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Пароль</label>
                </div>
                <div className="d-grid my-4">
                  <button onClick={submitForm} className="btn btn-primary rounded-pill btn-login text-uppercase fw-bold" type="submit">
                    Авторизоваться
                  </button>
                  <hr className="" />
                  <Link to="/teacher-register" className="btn btn-telecom rounded-pill btn-login text-uppercase fw-bold">
                    Зарегистрироваться
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherLogin;
