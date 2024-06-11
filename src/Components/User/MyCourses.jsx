import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import courseData from '../../data/courses.json'; // Путь к вашему JSON-файлу с данными

const MyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(courseData); // Используем данные из JSON файла
        document.title = 'LMS | My Courses';
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'><i className="bi bi-journals"/> Мои курсы</h5>
                        <div className='card-body table-responsive'>
                            <table className='table table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th className='text-center'>Создано</th>
                                        <th className='text-center'>Наименование курса</th>
                                        <th className='text-center'>Тренер</th>
                                        <th className='text-center'>Материалы</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {courses.map((row,index) =>
                                    <tr key={index}>
                                        <td className='text-center'><Link to={`/teacher-detail/${row.teacher.id}`}><img className='imgmeet' src={row.teacher.profile_img} alt=""/></Link></td>
                                        <td className='text-center'><Link to={`/detail/${row.id}`}>{row.title}</Link></td>
                                        <td className='text-center'>{row.teacher.full_name}</td>
                                        <td className='text-center'>
                                            <Link to={`/user/study-material/${row.id}`} className='btn text-white btn-sm btn-info mb-2 me-2'>Учебный материал</Link>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyCourses;
