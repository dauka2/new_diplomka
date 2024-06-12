import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import studyMaterials from '../../data/materials.json'; // Import the JSON file directly

import TeacherSidebar from './TeacherSidebar';

const StudyMaterial = () => {
    const { course_id } = useParams();
    const [studyData, setStudyData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    console.log("course_id1" + course_id)

    useEffect(() => {
        const filteredData = studyMaterials.filter(material => material.course_id === course_id);
        setStudyData(filteredData);
        setTotalResult(filteredData.length);
    }, [course_id]);

    const handleDeleteClick = (study_id) => {
        Swal.fire({
            title: 'Confirm',
            text: 'Are you sure you want to delete this material?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedData = studyData.filter(material => material.id !== study_id);
                setStudyData(updatedData);
                setTotalResult(updatedData.length);
                Swal.fire('Success', 'Data has been deleted successfully', 'success');

                // Update the JSON file (simulation)
                // In a real app, you would write this data back to the JSON file on the server or local storage
                // For example:
                // fs.writeFileSync('path_to_studyMaterials.json', JSON.stringify(updatedData, null, 2));
            } else {
                Swal.fire('Error', 'Data has not been deleted', 'error');
            }
        });
    };

    const downloadFile = (file_url) => {
        window.location.href = file_url;
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>
                        Все учебные материалы ({totalResult})
                            <Link className='btn btn-success btn-sm float-end' to={'/add-study/' + course_id}>Добавить учебный материал</Link>
                        </h5>
                        <div className='card-body table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Download</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studyData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.title}</td>
                                            <td>
                                                <button className='btn btn-outline-success' onClick={() => downloadFile(row.upload)}>Download Files</button>
                                            </td>
                                            <td>{row.remarks}</td>
                                            <td>
                                                <button onClick={() => handleDeleteClick(row.id)} className='btn btn-danger ms-2 btn-sm'>
                                                    <i className='bi bi-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StudyMaterial;
