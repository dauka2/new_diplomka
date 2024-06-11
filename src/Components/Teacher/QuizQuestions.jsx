import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import TeacherSidebar from './TeacherSidebar';
import questions from '../../data/questions.json'; // Путь к вашему JSON-файлу

const QuizQuestions = () => {
  const [totalResult, setTotalResult] = useState(0);
  const [questionData, setQuestionData] = useState([]);
  const { quiz_id } = useParams();

  useEffect(() => {
    const quizQuestions = questions.filter(question => question.quiz_id === parseInt(quiz_id));
    setTotalResult(quizQuestions.length);
    setQuestionData(quizQuestions);

    document.title = 'LMS | Course Quiz';
  }, [quiz_id]);

  const handleDeleteClick = (question_id) => {
    Swal.fire({
      title: 'Confirm',
      text: 'Are you sure you want to delete data?',
      icon: 'info',
      confirmButtonText: 'Continue',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedQuestions = questionData.filter(question => question.id !== question_id);
        setTotalResult(updatedQuestions.length);
        setQuestionData(updatedQuestions);
        Swal.fire('Success', 'Data has been deleted successfully', 'success');
      } else {
        Swal.fire('Error', 'Data has not been deleted !!', 'error');
      }
    });
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <TeacherSidebar />
        </aside>
        <section className='col-md-9'>
          <div className='card'>
            <h5 className='card-header'>Список вопросов теста</h5>
            <div className='card-body'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Вопрос</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {questionData.map((row, index) =>
                    <tr key={index}>
                      <td><Link to={`/edit-question/${row.id}`}>{row.questions}</Link></td>
                      <td>
                        <Link className='btn btn-sm text-white btn-info' to={`/edit-question/${row.id}`}><i className="bi bi-pencil-square"></i></Link>
                        <button className='btn btn-sm btn-danger ms-1' onClick={() => handleDeleteClick(row.id)}><i className='bi bi-trash'></i></button>
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

export default QuizQuestions;
