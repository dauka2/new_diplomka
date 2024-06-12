import React, { useEffect, useState } from 'react';
import TeacherSidebar from './TeacherSidebar';
import Swal from 'sweetalert2';
import academies from '../../data/academies.json';
import axios from 'axios';

const AddCourses = () => {
  useEffect(() => {
    document.title = 'LMS | Add Course';
  });

  const [courseData, setCourseData] = useState({
    category: '',
    title: '',
    description: '',
    f_img: '',
    techs: ''
  });

  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.files[0]
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const teacherId = localStorage.getItem('teacherId');
    const newCourse = {
      ...courseData,
      teacher: {
        id: teacherId,
        full_name: "Имя Учителя", // Получить это значение можно, например, из localStorage или другого источника
        profile_img: "https://www.example.com/profile.jpg" // Аналогично, должно быть настоящее изображение
      }
    };

    axios.post('http://localhost:3001/api/courses', newCourse)
      .then((res) => {
        Swal.fire('Success', 'Course has been added successfully');
        window.location.href = '/add-course';
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Error', 'An error occurred while adding the course');
      });
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <TeacherSidebar />
        </aside>
        <section className='col-md-9'>
          <div className='card'>
            <h3 className='card-header'><i className="bi bi-plus-square"></i> Создать курс</h3>
            <div className='card-body'>
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Категории</label>
                  <select name='category' onChange={handleChange} className="form-control">
                    <option value="">Выберите категорию</option>
                    {academies.map((category, index) => (
                      <option key={index} value={category.title}>{category.title}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Название</label>
                  <input type="text" onChange={handleChange} name='title' className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Описание</label>
                  <textarea onChange={handleChange} name='description' className='form-control' id='description'></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="f_img" className="form-label">Файл</label>
                  <input type="file" onChange={handleFileChange} name='f_img' className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="techs" className="form-label">Технологии</label>
                  <textarea onChange={handleChange} name='techs' className='form-control' placeholder='php,Java,C++...'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddCourses;
