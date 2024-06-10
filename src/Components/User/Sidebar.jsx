import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Sidebar = () => {
  useEffect(()=>{
    document.title='LMS | MainMenu'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div className='card'>
                    <div className='list-group list-group-flush'>
                        <Link to='/user-dashboard' className='list-group-item list-group-item-action'> Панель управления</Link>
                        <Link to='/my-courses' className='list-group-item list-group-item-action'> Мои курсы  </Link>
                        <Link to='/favorite-courses' className='list-group-item list-group-item-action'> Избранное </Link>
                        <Link to='/my-teachers' className='list-group-item list-group-item-action'> Тренеры </Link>
                        <Link to='/recommended-courses' className='list-group-item list-group-item-action'> Рекомендуемые курсы </Link>
                        <Link to='/my-assignments' className='list-group-item list-group-item-action'>Задачи</Link>
                        <Link to='/profile-setting' className='list-group-item list-group-item-action'> Профиль  </Link>
                        <Link to='/change-password' className='list-group-item list-group-item-action'> Изменение пароля </Link>
                        <Link to='/user-logout' className='list-group-item list-group-item-action text-danger'> Выйти </Link>
                    </div>
         </div>
  )
}

export default Sidebar
