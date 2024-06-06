import React from 'react'
import TeacherSidebar from './TeacherSidebar'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'

const baseUrl='https://minipro.pythonanywhere.com/api'

const AddStudyMaterial = () => {
    useEffect(()=>{
        document.title='LMS | Add Study Material'
      })

      const [studyData,setStudyData]=useState({
        title:'',
        description:'',
        upload:'',
        remarks:''
      });

      const handleChange=(event)=>{
        setStudyData({
            ...studyData,
            [event.target.name]:event.target.value
        });
      }

      const handleFileChange=(event)=>{
        setStudyData({
            ...studyData,
            [event.target.name]:event.target.files[0]
        })
      }

      const {course_id}=useParams();

      const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',course_id);
        _formData.append('title',studyData.title);
        _formData.append('description',studyData.description);
        _formData.append('upload',studyData.upload,studyData.upload.name);
        _formData.append('remarks',studyData.remarks);

        try{
            axios.post(baseUrl+'/study-material/'+course_id,_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200 || res.status==201){
                    Swal.fire({
                        title:'Uploaded Successfully!',
                        icon:'success',
                        toast:true,
                        timer:3000,
                        position:'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                }
            });
        }catch(error){
            console.log(error);
        }
      };
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <TeacherSidebar />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h3 className='card-header'>Добавить учебные материалы</h3>
                <div className='card-body'>
                     <div className="mb-3">
                        <label for="title" className="form-label">Название</label>
                        <input type="text" onChange={handleChange} name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Описание</label>
                        <textarea onChange={handleChange} name='description' className='form-control'></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="video" className="form-label">Загрузить</label>
                        <input type="file" onChange={handleFileChange} name='upload' className="form-control" id="inputGroupFile02" />
                    </div>
                    <div className="mb-3">
                        <label for="techs" className="form-label">Примечание</label>
                        <textarea className='form-control' onChange={handleChange} name='remarks'></textarea>
                    </div>
                    <button type="button" onClick={formSubmit} className="btn btn-primary">Отправить</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default AddStudyMaterial
