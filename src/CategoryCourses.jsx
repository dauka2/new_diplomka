import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import coursesData from '../src/data/category-courses.json';

const CategoryCourses = () => {
  useEffect(() => {
    document.title = 'LMS | Our Categories';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [courseData, setCourseData] = useState([]);
  const { category_id, category_slug } = useParams();
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  useEffect(() => {
    const filteredCourses = coursesData.results.filter(course => course.category_id === parseInt(category_id));
    setCourseData(filteredCourses);
  }, [category_id]);

  const paginationHandler = (url) => {
    fetchData(url);
  };

  function fetchData(url) {
    // Поскольку мы используем JSON файл, пагинация здесь не нужна
  }

  return (
    <div className='container mt-4'>
      <h3 className='pb-1 mb-4 mt-5'>{category_slug}</h3>
      <div className='row mb-4'>
        {courseData && courseData.map((course, index) =>
          <div className='col-md-3 mb-3' key={index}>
            <div className="card">
              <Link to={`/detail/${course.id}`}><img src={course.featured_img} height={200} className="card-img-top" alt={course.title} /></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Пагинация не нужна, так как мы не используем API */}
    </div>
  );
};

export default CategoryCourses;
