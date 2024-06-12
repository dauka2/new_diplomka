import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import QuizResult from './QuizResult';
import students from '../../data/users.json'; // Путь к вашему JSON-файлу

const baseUrl='https://minipro.pythonanywhere.com/api';

const AttemptedStudent = () => {
    useEffect(() => {
        document.title='LMS | All Attempted Students';
    }, []);

    const [studentData, setStudentData] = useState([]);
    const { quiz_id } = useParams();

    useEffect(() => {
        try {
            // Замените этот блок кода на вашу логику загрузки данных с сервера
            setStudentData(students); // Загрузка данных из JSON-файла
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
                        <h5 className='card-header'>Список студентов</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Имя</th>
                                        <th>E-mail</th>
                                        <th>Никнейм</th>
                                        <th>Результат</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.map((row, index) =>
                                        <tr key={index}>
                                            <td>{row.fullname}</td>
                                            <td>{row.email}</td>
                                            <td>{row.username}</td>
                                            <td>
                                                <button type='button' className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target={`#resultModal${row.id}`}>
                                                    Результаты
                                                </button>
                                                <div className="modal fade" id={`resultModal${row.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <QuizResult quiz={row.quiz.id} student={row.student.id} />
                                                </div>
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
    );
};

export default AttemptedStudent;
