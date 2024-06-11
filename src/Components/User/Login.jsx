import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import users from '../../data/users.json'; // Путь к вашему JSON-файлу
const baseUrl='http://localhost:5000/identityStudent/login'


const Login = () => {
  const studentLoginStatus = localStorage.getItem('studentLoginStatus');
  const [studentLoginData, setStudentLoginData] = useState({
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'LMS | Login';
  }, []);

  const handleChange = (event) => {
    setStudentLoginData({
      ...studentLoginData,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = () => {
    const { email, password } = studentLoginData;

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('studentLoginStatus', true);
      localStorage.setItem('studentId', user.id);
      window.location.href = '/user-dashboard';
    } else {
      setErrorMsg('Неправильный email или пароль');
    }
  };

  if (studentLoginStatus === 'true') {
    window.location.href = '/user-dashboard';
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <div className="text-center wow fadeInUp">
                  <h5 className="card-title text-center mb-3 fw-light fs-5 text-dark">Авторизоваться</h5>
                </div>
                {errorMsg && <p className="text-danger">{errorMsg}</p>}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={studentLoginData.email}
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
                    value={studentLoginData.password}
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
                  <Link to="/user-register" className="btn btn-telecom rounded-pill btn-login text-uppercase fw-bold">
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

export default Login;
