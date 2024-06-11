import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const baseUrl='http://localhost:5000/identityStudent/register'

const Register = () => {
    useEffect(()=>{
        document.title='LMS | Student Register'
      })

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [studentData,setStudentData]=useState({
        'fullname':'',
        'email':'',
        'password':'',
        'username':'',
        'interseted_categories':'',
        'status':''
    });

    const handleChange=(event)=>{
        setStudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm = () => {
      const studentFormData = new FormData();
      studentFormData.append("fullname", studentData.fullname);
      studentFormData.append("email", studentData.email);
      studentFormData.append("password", studentData.password);
      studentFormData.append("username", studentData.username);
      studentFormData.append("interseted_categories", studentData.interseted_categories);
  
      try {
          axios.post(baseUrl, studentFormData)
              .then((response) => {
                  setStudentData({
                      'fullname': '',
                      'email': '',
                      'password': '',
                      'username': '',
                      'interseted_categories': '',
                      'status': 'success'
                  });
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
                  let tID = setTimeout(function () {
                      window.location.href = '/user-login';
                      window.clearTimeout(tID);
                  }, 2500);
              })
      } catch (error) {
          console.log(error);
          setStudentData({ 'status': 'error' });
      }
  }
  

  return (
    <>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
          <div class="text-center wow fadeInUp">
          <h5 class="card-title text-center mb-3 fw-light fs-5 text-dark ">Регистрация</h5>
          </div>            
            {studentData.status=='success' && <h3 className='text-center text-success mb-3'>Регистрация прошла успешно</h3>}
            {studentData.status=='error' && <h3 className='text-center text-danger mb-3'>Не все поля заполнены</h3>}              
              <div class="form-floating mb-3">
                <input type="text" onChange={handleChange} name='fullname' class="form-control" id="floatingInput" placeholder="fullname" />
                <label for="floatingInput">Полное имя</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" onChange={handleChange} name='email' class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">E-mail</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" onChange={handleChange} name='username' class="form-control" id="floatingInput" placeholder="username"/>
                <label for="floatingInput">Никнейм</label>
              </div>
              <div class="form-floating mb-3">
                <input name='password' type="password" onChange={handleChange} class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Пароль</label>
              </div>
              <div class="form-floating mb-3">
                <textarea type="text" onChange={handleChange} name='interseted_categories' class="form-control" id="floatingInput" placeholder="Interest"></textarea>
                <label for="floatingInput">Хобби</label>
                <div id="emailHelp" className="form-text">Eg: Python, Java, C, C++, Web Development etc...</div>
              </div>
              <div class="d-grid my-4">
                <button onClick={submitForm} class="btn btn-primary rounded-pill btn-login text-uppercase fw-bold" type="submit" >Регистрация</button>
                <hr className=''/>
                <Link to='/teacher-login' class="btn btn-telecom rounded-pill btn-login text-uppercase fw-bold">Уже есть аккаунт?</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Register
