import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import coursesDataJSON from '../../data/courses.json';

const AllCourses = () => {
  const [courseData, setCourseData] = useState(coursesDataJSON.results);
  const [nextUrl, setNextUrl] = useState(coursesDataJSON.next);
  const [previousUrl, setPreviousUrl] = useState(coursesDataJSON.previous);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'LMS | Latest Courses';
  }, []);

  const paginationHandler = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCourseData(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
  };

  return (
    <div className='container mt-4'>
      <div className="text-center wow fadeInUp">
        <h6 className="section-title bg-white text-center text-primary px-3">Курсы</h6>
        <h1 className="mb-5">Все курсы</h1>
      </div>
      <div className='row mb-4'>
        {courseData && courseData.map((course, index) =>
          <div className='col-md-3 mb-4' key={index}>
            <div className="card">
              <Link to={`/detail/${course.id}`}><img src={course.featured_img} height={200} className="card-img-top" alt={course.title} /></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
              </div>
            </div>
          </div>
        )}
      </div>

      <nav aria-label="Page navigation example mt-3">
        <ul className="pagination justify-content-center">
          {previousUrl &&
            <li className='page-item '><button className='page-link ms-2 rounded-pill' onClick={() => paginationHandler(previousUrl)}><i className='bi bi-arrow-left'></i>Предыдущее</button></li>
          }
          {nextUrl &&
            <li className='page-item'><button className='page-link ms-2 rounded-pill' onClick={() => paginationHandler(nextUrl)}>Далее<i className='bi bi-arrow-right'></i></button></li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default AllCourses;
