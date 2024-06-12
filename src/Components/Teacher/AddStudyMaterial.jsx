import React, { useEffect, useState } from 'react';
import TeacherSidebar from './TeacherSidebar';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import materials from '../../data/materials.json'; // Import the JSON file directly

const AddStudyMaterial = () => {
    useEffect(() => {
        document.title = 'LMS | Add Study Material';
    });

    const { course_id } = useParams();

    const [studyData, setStudyData] = useState({
        title: '',
        description: '',
        upload: '',
        remarks: ''
    });

    const handleChange = (event) => {
        setStudyData({
            ...studyData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setStudyData({
            ...studyData,
            [event.target.name]: event.target.files[0]
        });
    };

    var filepath = '../../files/';
    const formSubmit = () => {
        // Create a new object for the study material
        const newMaterial = {
            id: materials.length + 1, // Generate a new ID
            course_id: course_id,
            title: studyData.title,
            upload: filepath+studyData.filepath, // Placeholder for file upload path
            remarks: studyData.remarks
        };

        // Update the materials array with the new study material
        const updatedMaterials = [...materials, newMaterial];

        // Update the JSON file (simulation)
        // In a real app, you would write this data back to the JSON file on the server or local storage
        // For example:
        // fs.writeFileSync('path_to_materials.json', JSON.stringify(updatedMaterials, null, 2));
        // Обновляем JSON-файл
        localStorage.setItem('materials', JSON.stringify(updatedMaterials));


        // Update the state to trigger a re-render
        setStudyData({
            title: '',
            description: '',
            upload: '',
            remarks: ''
        });

        Swal.fire({
            title: 'Uploaded Successfully!',
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
                        <h3 className='card-header'>Add Study Material</h3>
                        <div className='card-body'>
                            <div className='mb-3'>
                                <label htmlFor='title' className='form-label'>
                                    Title
                                </label>
                                <input type='text' onChange={handleChange} name='title' className='form-control' value={studyData.title} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='description' className='form-label'>
                                    Description
                                </label>
                                <textarea onChange={handleChange} name='description' className='form-control' value={studyData.description}></textarea>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='upload' className='form-label'>
                                    Upload
                                </label>
                                <input type='file' onChange={handleFileChange} name='upload' className='form-control' id='inputGroupFile02' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='remarks' className='form-label'>
                                    Remarks
                                </label>
                                <textarea className='form-control' onChange={handleChange} name='remarks' value={studyData.remarks}></textarea>
                            </div>
                            <button type='button' onClick={formSubmit} className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AddStudyMaterial;
