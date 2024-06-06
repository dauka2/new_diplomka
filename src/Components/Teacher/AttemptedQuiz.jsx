import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import CheckQuizCourse from './CheckQuizCourse'
import QuizResult from './QuizResult'

const baseUrl='https://minipro.pythonanywhere.com/api'

const AttemptedQuiz = () => {
    useEffect(()=>{
        document.title='LMS | All Quiz'
      })

      const [studentData, setStudentData]=useState([]);
      const {quiz_id}=useParams() 

      useEffect(()=>{
        try{
            axios.get(baseUrl+'/attempted-quiz/'+quiz_id)
            .then((res)=>{
                setStudentData(res.data)
            });
        }catch(error){
            console.log(error)
        }
        
      },[]);

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
                                    <th>Результаты</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.map((row,index) => 
                                <tr>
                                    <td>
                                        {row.student.fullname}
                                    </td>
                                    <td>
                                        {row.student.email}
                                    </td>
                                    <td>
                                        {row.student.username}
                                    </td>
                                    <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#resultModal${row.id}`}>
                                        Результаты
                                    </button>
                                    <div className="modal fade" id={`resultModal${row.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  )
}

export default AttemptedQuiz

