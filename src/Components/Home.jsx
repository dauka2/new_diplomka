import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Stars from './Stars'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Header.css'
import wave from './darkside.mp4'
import './main.css'
import About from './About'
import ab from './about.jpg'
import './search.css'

const baseUrl='https://minipro.pythonanywhere.com/api'

const Home = () => {
  useEffect(()=>{
    document.title='Edu Learning'
  })

  const icon={
    'font-size':'20px'
  } 

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [courseData, setCourseData]=useState([]);
  const [popularcourseData,setPopularcourseData]=useState([]);
  const [popularteacherData,setPopularteacherData]=useState([]);
  const [testData,setTestData]=useState([]);

  useEffect(()=>{
    try{
        axios.get(baseUrl+'/course/?result=3')
        .then((res)=>{
            setCourseData(res.data.results)
        });
    }catch(error){
        console.log(error)
    }

    try{
      axios.get(baseUrl+'/popular-teachers/?popular=1')
      .then((res)=>{
        setPopularteacherData(res.data)
      });
  }catch(error){
      console.log(error)
  }

  try{
    axios.get(baseUrl+'/popular-courses/?popular=1')
    .then((res)=>{
      setPopularcourseData(res.data.results)
    });
}catch(error){
    console.log(error)
}

try{
  axios.get(baseUrl+'/student-test/')
  .then((res)=>{
    setTestData(res.data.results)
  });
}catch(error){
  console.log(error)
}
    
  },[]);

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  
  const [searchString,setSearchString]=useState({
    'search':'',
  })

  const handleChange=(event)=>{
    setSearchString({
      ...searchString,
      [event.target.name]:event.target.value
    });
  }
  
  return (
    <>
      {/* Start Background video player*/}
    <section class="showcase">
    <video src={wave} autoPlay muted loop />
    <div class="overlay"></div>
    <div class="text">
      <h1 className='head'>Платформа для обучения<br/> работников АО "Казактелеком"</h1> 
      <h1 className='headss'>Обучайся с нами!</h1>
      <h1 className='headss'>100+ курсов<br/>100000+ обучающихся</h1>
    </div>
    </section>
      {/*  End Background video player*/}
      {/*  Start Features of meetLearning*/}
    <div class="container-xxl py-5" className='space'>
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 class="mb-3">Новость 1</h5>
                            <p> Повышение зарплаты: <br/>Каждый сотрудник нашей компании будет рад услышать, что его труды и усилия оценены. Мы рады сообщить, что с начала следующего месяца мы повысим зарплату каждого работника на 100000 IDR потому что денег стало больше.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 class="mb-3">Новость 2</h5>
                            <p>Ведущий телеком-оператор страны «Казахтелеком» объявил об успешном завершении процесса выплаты дивидендов за 2023 год. Дивиденд на одну привилегированную акцию составил 1796,6 тенге, в то время как на одну простую акцию дивиденд составил 2096,6 тенге.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 class="mb-3">Новость 3</h5>
                            <p>Крупнейший телеком-оператор страны продолжает активно развивать свою сетевую инфраструктуру по республике. Так, накануне «Казахтелеком» подключил ко всем современным телекоммуникационным услугам и цифровым сервисам очередную многоэтажку.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 class="mb-3">Новость 4</h5>
                            <p>В рамках реализации программы "Тазарту" ДЭСД Астана уведомляет Вас, что в целях улучшения качества предоставляемых услуг телекоммуникаций по г. Астана проводятся работы по переключению абонентов, которые мы выберем.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/*  End Features of meetLearning*/}
      {/*  About Us card */}
    <div class="container-xxl py-5">
      <About/>
    </div>
      {/*  About Us card */}
      <div class="input-box container">
          <i class="bi bi-search text-info"></i>
          <input name='search' type="search" onChange={handleChange} placeholder="Искать здесь..." aria-label="Search" />
          <Link className='button' to={'/search/'+searchString.search} type="button">Поиск</Link>
      </div>

    <div className='container mt-4'>
      {/* Start Latest Courses*/}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">Курсы</h6>
                <h1 class="mb-5">Последние Курсы</h1>
            </div>
            <div class="row g-4 justify-content-center">
            {courseData && courseData.map((course,index) =>
                <div class="col-lg-4 col-md-6 wow fadeInUp">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                        <Link to={`/detail/${course.id}`}><img src={course.featured_img} height={250}  className="card-img-top" alt={course.title} /></Link>                        </div>
                        <div class="text-center p-4 pb-0">
                            <h5 className="mb-4"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{course.teacher.full_name}</small>                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>{course.total_enrolled_students}</small>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
    <div class="text-center">
    <button type="button" class="btn btn-primary border border-primary"><Link to='/all-courses'className='text-white' >Смотреть подробнее</Link></button>
    </div>
      {/* ENd Latest Courses*/}
      {/* popular Courses*/}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">Курсы</h6>
                <h1 class="mb-5">Частые Курсы</h1>
            </div>
            <div class="row g-4 justify-content-center">
            {popularcourseData && popularcourseData.map((row,index)=>
                <div class="col-lg-4 col-md-6 wow fadeInUp">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                            <Link to={`/detail/${row.course.id}`}><img src={row.course.featured_img} height={250}  className="card-img-top" alt={row.course.title}/></Link>
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h5 className="mb-4"><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{row.course.teacher.full_name}</small>
                            <small class="flex-fill text-center border-end py-2"><Stars stars={row.rating}/></small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-eye text-primary me-2"></i>{row.course.course_views}</small>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
    <div class="text-center">
    <button type="button" class="btn btn-primary border border-primary"><Link to='/popular-courses' className='text-white'>Смотреть подробнее</Link></button>
    </div>
      {/* ENd Popular Courses*/}
      {/* Popular Teacher */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">Тренера</h6>
                <h1 class="mb-5">Топ тренеров</h1>
            </div>
            <div class="row g-4">
            {popularteacherData && popularteacherData.map((teacher,index)=>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                          <Link className='front' to={`/teacher-detail/${teacher.id}`}><img src={teacher.profile_img} height={330} className="card-img-top" alt={teacher.full_name}/></Link>
                        </div>
                        <div class="position-relative d-flex justify-content-center">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1 mt-1">
                            {teacher.insta_url &&
                              <a class="btn btn-sm-square btn-primary mx-1" href={teacher.insta_url}><i class="fab fa-instagram"></i></a>
                            }
                            {teacher.twit_url &&
                              <a class="btn btn-sm-square btn-primary mx-1" href={teacher.twit_url}><i class="fab fa-twitter"></i></a>
                            }
                            {teacher.face_url &&
                              <a class="btn btn-sm-square btn-primary mx-1" href={teacher.face_url}><i class="fab fa-facebook"></i></a>
                            }
                        </div>
                        </div>
                        <div class="text-center p-4">
                        <h4 className="card-title mb-0 "><Link to={`/teacher-detail/${teacher.id}`}>{teacher.full_name}</Link></h4>                            
                        <p className='mb-0'>{teacher.qualification}</p>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
      {/* ENd Popular Teacher Courses*/}
      {/* Student Testimonial */}
    <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">Что говорит наш студент!</h6>
                <h1 class="mb-5">Отзывы студентов</h1>
        </div>
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5500}
        showIndicators={false}
      >
      {testData && testData.map((row,i)=>
        <div>
            <img src={row.student.profile_img} />
          <>
          <div className="myCarousel">
            <names>{row.course.fullname}</names>
            <titles>{row.course.title}</titles>
            <p>{row.reviews}</p>
            <a>--{row.student.fullname}</a>
          </div>
          </>
        </div>
        )}
      </Carousel>
    </div>
      {/* ENd Student Testimonial*/}
    </div>
    </>
  )
}

export default Home