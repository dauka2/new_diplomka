import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  
  const [searchString,setSearchString]=useState({
    'search':'',
  })

  const handleChange=(event)=>{
    setSearchString({
      ...searchString,
      [event.target.name]:event.target.value
    });
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"><i class="bi bi-book-half ms-1"></i><Link className='ms-2' to="/">Telecom Academy</Link></h2>
        </Link>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" class="nav-item nav-link">Главная</Link>
                <Link to="/category" class="nav-item nav-link">Академии</Link>
                <Link to="/all-courses" class="nav-item nav-link">Курсы</Link>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Учитель</a>
                    <div class="dropdown-menu fade-down m-0">
                    {teacherLoginStatus !='true' && 
                    <>
                      <li><Link className="dropdown-item" to="/teacher-login">Логин</Link></li>
                      <li><Link className="dropdown-item" to="/teacher-register">Регистрация</Link></li>
                    </>
                    }
                    {teacherLoginStatus ==='true' && 
                    <>
                      <li><Link className="dropdown-item" to="/teacher-dashboard">Расписание</Link></li>
                      <li><Link className="dropdown-item" to="/teacher-logout">Выйти</Link></li>
                    </>
                    }
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle ps-0 px-5" data-bs-toggle="dropdown">Пользователь</a>
                    <div class="dropdown-menu fade-down m-0">
                    {studentLoginStatus !='true' && 
                    <>
                      <li><Link className="dropdown-item" to="/user-login">Логин</Link></li>
                      <li><Link className="dropdown-item" to="/user-register">Регистрация</Link></li>
                    </>
                    }
                    {studentLoginStatus === 'true' &&
                    <>
                      <li><Link className="dropdown-item" to="/user-dashboard">Расписание</Link></li>
                      <li><Link className="dropdown-item " to="/user-logout">Выйти</Link></li>
                    </>
                    }
                    </div>
                </div>
                <a className="nav-link nav-item" target='__blank' href="">Админ панель</a>
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Header