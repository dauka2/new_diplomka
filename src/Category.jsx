import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import categoriesData from '../src/data/academies.json';  // Подключаем локальный JSON файл

const baseUrl = 'https://minipro.pythonanywhere.com/api';

const Category = () => {
  useEffect(() => {
    document.title = 'LMS | Our Categories';
  }, []);

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    try {
      // Используем данные из локального JSON файла
      setCategoryData(categoriesData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container mt-4'>
      <div class="mt-3 text-center wow fadeInUp">
        <h6 class="section-title bg-white text-center text-primary px-3">Академии</h6>
        <h1 class="mb-5">Все академии</h1>
      </div>    
      <div className='row mb-4'>
      {categoryData && categoryData.map((row, index) =>
      <div className='col-md-3 mb-3' key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><Link to={`/course/${row.id}/${row.title}`}>{row.title}  ({row.total_courses})</Link></h5>
            <p className='card-text'>{row.description}</p>
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
  );
}

export default Category;
