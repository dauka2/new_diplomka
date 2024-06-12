import React, { useEffect, useState } from 'react';
import TeacherSidebar from './TeacherSidebar';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import assignments from '../../data/assignments.json'; // Подключение JSON файла

const AddAssignment = () => {
    useEffect(() => {
        document.title = 'LMS | Add Assignment';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [assignmentData, setAssignmentData] = useState({
        title: '',
        detail: ''
    });

    const handleChange = (event) => {
        setAssignmentData({
            ...assignmentData,
            [event.target.name]: event.target.value
        });
    };

    const { student_id, teacher_id } = useParams();

    const formSubmit = () => {
        const newAssignment = {
            id: assignments.length + 1,
            teacher: teacher_id,
            title: assignmentData.title,
            detail: assignmentData.detail,
            student: student_id
        };

        // Имитация POST запроса, добавляем новое задание в локальный массив
        assignments.push(newAssignment);

        Swal.fire({
            title: 'Assignment added Successfully!',
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
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
                        <h3 className='card-header'>Добавить задание</h3>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Название</label>
                                <input type="text" onChange={handleChange} name='title' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Описание</label>
                                <textarea onChange={handleChange} name='detail' className='form-control'></textarea>
                            </div>
                            <button type="button" onClick={formSubmit} className="btn btn-primary">Отправить</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddAssignment;
