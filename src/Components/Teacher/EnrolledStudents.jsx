import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import enrolledStudents from '../../data/enrolledStudents.json'; // Путь к вашему JSON-файлу

const EnrolledStudents = () => {
    useEffect(() => {
        document.title = 'LMS | Enrolled Students';
    });

    const [studentData, setStudentData] = useState([]);
    let { course_id } = useParams();

    useEffect(() => {
        try {
            // Замените этот блок кода на вашу логику загрузки данных с сервера
            const filteredStudents = enrolledStudents.filter(student => student.course_id === parseInt(course_id));
            setStudentData(filteredStudents);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'><i className="bi bi-people-fill"></i> Список записанных студентов</h5>
                        <div className='card-body'>
                            <div className="table-responsive">
                                <table className='table table-striped table-hover'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Профиль</th>
                                            <th className='text-center'>Имя</th>
                                            <th className='text-center'>E-mail</th>
                                            <th className='text-center'>Интересы</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studentData.map((row, index) =>
                                            <tr key={index}>
                                                <td className='text-center'><img className='imgmeet' src={row.student.profile_img} alt={row.student.fullname} /></td>
                                                <td className='text-center'>{row.student.fullname}</td>
                                                <td className='text-center w-auto'>{row.student.email}</td>
                                                <td className='text-center'>{row.student.interested_categories}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default EnrolledStudents;
